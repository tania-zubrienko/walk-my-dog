<h1>Walk My Dog  / Care my Pet</h1>

<table>
  <thead>
    <tr>
      <th>HTTP Method</th>
      <th>URI Path</th>
      <th>Description</th>
      <th>JSON</th>
      <th>Private</th>
    </tr>
  </thead>

    
  <tbody>
     <tr>
      <th>GET</th>
      <td><code>/</code></td>
      <td>Pagina de incio</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>GET</th>
      <td><code>/servicios</code></td>
      <td>Pagina de servicios</td>
      <td></td>
      <td></td>
    </tr>
     <tr>
      <th>GET</th>
      <td><code>/login</code></td>
      <td>Formulario de inicio de session (render)</td>
      <td></td>
      <td></td>
    </tr>
     <tr>
      <th>POST</th>
      <td><code>/login</code></td>
      <td>Formulario de inicio de session (handler)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>GET</th>
      <td><code>/signup</code></td>
      <td>Pagina de registro (render)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>POST</th>
      <td><code>/signup</code></td>
      <td>Pagina de registro (handler)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>GET</th>
      <td><code>/listado-usuarios/</code></td>
      <td>Vista de admin para gestion de cuentas</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>GET</th>
      <td><code>/api/userlist</code></td>
      <td>Lisatdo de cuidadores</td>
      <td>✔️</td>
      <td></td>
    </tr>
    <tr>
      <th>GET</th>
      <td><code>/api/services</code></td>
      <td>Lisatdo sitios de interes</td>
      <td>✔️</td>
      <td></td>
    </tr>
 </tbody>
</table>



<h3>Cuidadores</h3>
<table>
  <thead>
    <tr>
      <th>HTTP Method</th>
      <th>URI Path</th>
      <th>Description</th>
      <th>JSON</th>
      <th>Private</th>
   </tr>
  </thead>
  <tbody>
     <tr>
      <th>GET</th>
      <td><code>/cuidadores</code></td>
      <td>Listado de cuidadores</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>GET</th>
      <td><code>/cuidadores/:id</code></td>
      <td>Detalles del perfil de cuidador</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
    <th>GET</th>
      <td><code>/cuidadores/:id/reservar</code></td>
      <td>Hacer una reserva de cuidador</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
    <th>POST</th>
      <td><code>/cuidadores/:id/reservar</code></td>
      <td>Hacer una reserva de cuidador</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
    <th>GET</th>
      <td><code>/cuidadores/:id/comentar</code></td>
      <td>Dejar el comentario (render)</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
    <th>POST</th>
      <td><code>/cuidadores/:id/comentar</code></td>
      <td>Dejar el comentario (handler)</td>
      <td></td>
      <td>✔️</td>
    </tr>
        <tr>
    <th>POST</th>
      <td><code>/cuidadores/:id/valorar</code></td>
      <td>Valorar el perfil (handler)</td>
      <td></td>
      <td>✔️</td>
    </tr>
     </tbody>
</table>




<h3>Perfiles</h3>

<table>
  <thead>
    <tr>
      <th>HTTP Method</th>
      <th>URI Path</th>
      <th>Description</th>
      <th>JSON</th>
      <th>Private</th>
   </tr>
  </thead>

  <tbody>
    <tr>
      <th>GET</th>
      <td><code>/perfil</code></td>
      <td>Perfil de usuario (cuidador/cliente)</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>GET</th>
      <td><code>/perfil/editar/:id</code></td>
      <td>Editar perfil (render)</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>POST</th>
      <td><code>/perfil/editar/:id</code></td>
      <td>Editar perfil (handler)</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>POST</th>
      <td><code>/perfil/eliminar/:id</code></td>
      <td>Eliminar perfil de usuario comno admin(handler)</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>GET</th>
      <td><code>/perfil/reservas</code></td>
      <td>Listado de reservas</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>POST</th>
      <td><code>/perfil/reservas/eliminar/:id</code></td>
      <td>Eliminar reserva (handler solo propietario)</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>GET</th>
      <td><code>/perfil/reservas/edit/:id</code></td>
      <td>Editar reserva (render)</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>POST</th>
      <td><code>/perfil/reservas/edit/:id</code></td>
      <td>Editar reserva (handler)</td>
      <td></td>
      <td>✔️</td>
    </tr>
  </tbody>
</table>
