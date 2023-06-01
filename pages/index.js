import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";

// COMEÇO JAVASCRIPT
export default function Home() {
  const [usuarios, setUsuarios] = useState([])


  //CONSULTA DA API
  useEffect(() => {
    fetch("/api/usuarios")
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data);
        console.log(data);
      });
  });

  const adicionar = () => {};

  const formulario = (evento) => {
    evento.preventDefault();

    let usuario = {
      nome: evento.target[0].value,
      email: evento.target[1].value,
      idade: evento.target[2].value,
    };

    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    };

    //CONSULTA DA API
    fetch("/api/usuarios", request)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  // FINAL JAVASCRIPT


  return (
    //COMEÇO DO HTML
    //OBS: ALGUMAS TAG "HTML" PODE SE COMPORTA DE FORMA DIFERENTE EM ALGUNS FRAMEWORKS!!
    <>
      <Head>
        <title>Cadastro de usuário</title>
      </Head>
      <main>
        <button onClick={(evento) => adicionar()}> Novo usuário </button>

        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>nome</td>
              <td>email</td>
              <td>idade</td>
            </tr>
          </thead>
        </table>

        <table>
          <tbody>
            {/* aqui tem que ficar dinâmico */}
            {usuarios.map((usuario) => (
              <tr>
                <td>id</td>
                <td>nome</td>
                <td>email</td>
                <td>idade</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <form onSubmit={(e) => formulario(e)}>
        <input type="text" id="nome" placeholder="nome" />
        <br />
        <input type="email" id="email" placeholder="email" />
        <br />
        <input type="text" id="idade" placeholder="idade" />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
    // FINAL DO HTML
  );
}
