import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import callbackImg from '../../../public/callback_img.png'

const validationSchema = Yup.object({
  name: Yup.string().required("Please Enter your name"),
  email: Yup.string().email().required("Please Enter your email"),
  message: Yup.string().required('Required')
})

const Callback = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
      <section className='bg-[#fff7e7]'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-center gap-x-1'>
          <div className='w-[424px]'>
            <div>
              <img src={callbackImg} alt="Not Found" />
            </div>
            <h6 className='text-primary-orange text-sm not-italic	font-bold	leading-normal	mt-4'>REQUEST A CALLBACK</h6>
            <h4 className='text-[#222132] text-[49px] not-italic font-extrabold	leading-[42px] mt-5'>We will contact in the shortest time.</h4>
            <span className='text-[#9291A1] text-[25px] not-italic font-normal leading-[30px] mt-2'>Monday to Friday, 9am-5pm.</span>
          </div>
          <div className='w-[424px] flex'>
          <form onSubmit={formik.handleSubmit} className="space-y-4 w-[424px]">
            <div>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-600 text-sm">{formik.errors.name}</div>
              ) : null}
            </div>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600 text-sm">{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <input
                id="message"
                name="message"
                type="text"
                placeholder="Message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-600 text-sm">{formik.errors.message}</div>
              ) : null}
            </div>

            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-orange hover:bg-blue-700 focus:outline-none">
              Submit
            </button>
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Callback
