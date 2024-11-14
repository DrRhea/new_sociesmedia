<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    use HasFactory;

    // Nama tabel
    protected $table = 'schools';

    // Primary Key
    protected $primaryKey = 'id';

    // Non-incrementing or non-numeric primary key
    public $incrementing = false;

    // Tipe primary key (karena VARCHAR)
    protected $keyType = 'string';

    // Disable timestamps
    public $timestamps = false;

    // Kolom-kolom yang dapat diisi
    protected $fillable = [
        'id',
        'npsn',
        'sekolah',
        'bentuk',
        'status',
        'alamat_jalan',
        'lintang',
        'bujur',
        'kode_prop',
        'propinsi',
        'kode_kab_kota',
        'kabupaten_kota',
        'kode_kec',
        'kecamatan'
    ];
}
