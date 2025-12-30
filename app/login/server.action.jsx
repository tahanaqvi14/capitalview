'use server'

export default async function Contactaction(prevState,formData) {


    const { name, email, phone } = Object.fromEntries(formData.entries());

}
