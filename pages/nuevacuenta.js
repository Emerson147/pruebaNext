import React from "react";
import Layout from "../components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useQuery, gql } from '@apollo/client'


const QUERY = gql`
  query obetenerProductos {
    obtenerProductos {
      id
      nombre
      precio
      existencia
      creado
    }
  }
`;


const NuevaCuenta = () => {

  //Obteer Productos de graphql
  const { data, loading, error } = useQuery(QUERY);

  console.log(data);
  console.log(loading)
  console.log(error)

  //Validacion de formik
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      email: '',
      password: ''
    },

    validationSchema: Yup.object({
      nombre: Yup.string()
          .required('El nombre es obligatorio rey'),
      apellido: Yup.string()
          .required('El apellido es obligatorio rey'),
      email: Yup.string()
          .email('El email no es valido').required('El email es obligatorio '),
      password: Yup.string()
          .required('El password no puede ir vacio rey')
          .min(6,'El password debe ser al menos 6 caracteres')
    }),

    onSubmit: valores => {
      console.log('enviando');
      console.log(valores);
    }
  })


  return (
    <>
      <Layout>
        <h1 className="text-center text-2xl text-white font-light ">
          Crear Nueva Cuenta
        </h1>

        <div className="flex justify-center mt-5">
          <div className="w-full max-w-sm">
            <form
              className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
              onSubmit={formik.handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="nombre"
                >
                  Nombre
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nombre"
                  type="text"
                  placeholder="Nombre usuario"
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {formik.touched.nombre && formik.errors.nombre ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.nombre}</p>
                </div>
              ) : null}

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="apellido"
                >
                  Apellido
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="apellido"
                  type="text"
                  placeholder="Apellido usuario"
                  value={formik.values.apellido}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {formik.touched.apellido && formik.errors.apellido ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.apellido}</p>
                </div>
              ) : null}

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="nombre"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email usuario"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {formik.touched.email && formik.errors.email ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.email}</p>
                </div>
              ) : null}

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password usuario"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>

              {formik.touched.password && formik.errors.password ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.password}</p>
                </div>
              ) : null}

              <input
                type="submit"
                className="bg-gray-800 w-full mt-5 p-2 text-white uppercas hover:bg-gray-900"
                value="Crear cuenta nueva"
              />
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NuevaCuenta;
