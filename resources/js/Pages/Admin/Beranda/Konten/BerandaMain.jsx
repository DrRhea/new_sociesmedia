import AdminLayout from '@/Layout/AdminLayout'
import React from 'react'

const BerandaMain = () => {
  return (
    <AdminLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            disini 
          </div>
        </div>
    </AdminLayout>
  )
}

export default BerandaMain