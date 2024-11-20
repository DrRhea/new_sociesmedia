import React, { useState } from 'react';
import AdminLayout from '@/Layout/AdminLayout';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from "@nextui-org/react";
import { Link, router } from '@inertiajs/react';
import 'boxicons/css/boxicons.min.css';

const PenelitiMain = ({ researchers = [] }) => {
  const [selectedPeneliti, setSelectedPeneliti] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const filteredResearchers = researchers.filter((item) =>
    item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = (peneliti) => {
    setSelectedPeneliti(peneliti);
    onOpen();
  };

  const handleOpenDeleteModal = (peneliti) => {
    setSelectedPeneliti(peneliti);
    setDeleteModalOpen(true);
  };

  const handleDelete = (selectedPeneliti) => {
    router.delete(`/dashboard/peneliti/manajemen-peneliti/delete/${selectedPeneliti.id}`);
    setDeleteModalOpen(false);
    setSelectedPeneliti(null);
  };

  return (
    <AdminLayout>
      <div className="flex flex-col flex-1 gap-4 p-4">
        {/* Header Atas Tabel */}
        <div className="flex items-center justify-between">
          <Input 
            type="text" 
            placeholder="Cari nama peneliti..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/2 px-8 py-3"
          />

          <div className="flex items-center space-x-2">
            <Link href='/dashboard/peneliti/manajemen-peneliti/tambah-peneliti'>
              <Button className="text-white bg-black rounded-md hover:bg-gray-800">Tambah +</Button>
            </Link>
          </div>
        </div>

        {/* Tabel Data */}
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">No</TableHead>
                <TableHead className="text-center">Foto</TableHead>
                <TableHead className="text-center">Nama</TableHead>
                <TableHead className="text-center">Email</TableHead>
                <TableHead className="text-center">Kontak</TableHead>
                <TableHead className="text-center">ID Sinta</TableHead>
                <TableHead className="text-center">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredResearchers.length > 0 ? (
                filteredResearchers.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-center">{index + 1}</TableCell>
                    <TableCell className="flex justify-center">
                      <img src={`/storage/${item.picture}`} alt="" className='w-12 rounded-lg aspect-square'/>
                    </TableCell>
                    <TableCell className="font-bold text-center">{item.name}</TableCell>
                    <TableCell className="text-center">
                      <a href={`mailto:${item.email}`} className="text-blue-500 hover:underline">
                        {item.email}
                      </a>
                    </TableCell>
                    <TableCell className="text-center">{item.contact_info}</TableCell>
                    <TableCell className="text-center">{item.sinta_id}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center space-x-2">
                        {/* Tombol User Detail */}
                        <button 
                          onClick={() => handleOpenModal(item)}
                          className="text-black hover:text-gray-700"
                        >
                          <i className='text-xl bx bxs-user-detail'></i>
                        </button>

                        <span className=''>
                          <i class='text-xl bx bxs-chevron-left'></i>
                        </span>

                        {/* Tombol Edit */}
                        <Link href={`/dashboard/peneliti/manajemen-peneliti/edit/${item.id}`} className="text-black hover:text-gray-700">
                          <i className='text-xl bx bx-edit-alt'></i>
                        </Link>

                        {/* Tombol Delete */}
                        <button onClick={() => handleOpenDeleteModal(item)} className="text-black hover:text-gray-700">
                          <i className="text-xl bx bx-trash"></i>
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="py-4 text-center">
                    Belum ada data <strong>peneliti</strong> tersedia.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Modal Detail Peneliti */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Detail Peneliti
              </ModalHeader>
              <ModalBody>
                {selectedPeneliti && (
                  <>
                    <div className="flex justify-center mb-4">
                      <img 
                        src={`/storage/${selectedPeneliti.picture}`} 
                        alt={`Foto ${selectedPeneliti.name}`} 
                        className="object-cover w-24 h-24 rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <p><strong>Nama:</strong> {selectedPeneliti.name}</p>
                      <p><strong>Bidang Studi:</strong> {selectedPeneliti.field_of_study || "Tidak tersedia"}</p>
                      <p><strong>Email:</strong> {selectedPeneliti.email}</p>
                      <p><strong>Kontak:</strong> {selectedPeneliti.contact_info || "Tidak tersedia"}</p>
                      <p><strong>ID Sinta:</strong> {selectedPeneliti.sinta_id || "Tidak tersedia"}</p>
                      <p><strong>Biografi:</strong> {selectedPeneliti.biography || "Tidak tersedia"}</p>
                      <p><strong>Status:</strong> {selectedPeneliti.status === 'active' ? "Aktif" : "Non-Aktif"}</p>
                    </div>
                  </> 
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Tutup
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Modal Konfirmasi Penghapusan */}
      <Modal isOpen={isDeleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Konfirmasi Penghapusan</ModalHeader>
              <ModalBody>
                <p>Apakah Anda yakin ingin menghapus peneliti <strong>{selectedPeneliti?.name}</strong>? Tindakan ini tidak dapat dibatalkan.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Batal
                </Button>
                <Button className="bg-slate-950 hover:bg-slate-800" onClick={() => handleDelete(selectedPeneliti)}>
                  Hapus
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </AdminLayout>
  );
};

export default PenelitiMain;
