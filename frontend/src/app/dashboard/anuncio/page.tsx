import NuevoAnuncioForm from '@/components/forms/nuevoAnuncioForm'
import DeletAnnouncement from '@/components/forms/delete-tab'

function page() {
  return (
    <div>
      <NuevoAnuncioForm />
      <DeletAnnouncement />
    </div>
  )
}

export default page
