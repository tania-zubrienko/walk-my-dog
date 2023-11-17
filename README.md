<h1>Walk My Dog  / Care my Pet</h1>

Walk My Dog is a service designed to meet the needs of pet owners who require assistance with their beloved pets while they are away from home or occupied with other responsibilities. 
The platform facilitates seamless communication and coordination between three main roles: Admin, Client (pet owner), and Pet Carer.
<hr>

<h3>Key Features:</h3>

<h4>User Roles:</h4>

Admin: Has access to all user profiles, enabling the viewing and deletion of information as needed.
Client (Pet Owner): Can access the platform to view a map displaying available pet care services. By selecting specific criteria and pressing a button, the map displays markers corresponding to services in the user's neighborhood. Additionally, users can view registered pet carers in their area.
Pet Carer: Accesses services similar to clients but with a focus on managing bookings. Carers can accept or cancel assigned bookings.

Geolocation:
The app implements geolocation technology to provide users with the exact location of the logged-in user. This feature enhances the precision of service delivery.
Booking Services:

Clients can book services by providing details about their pets and specifying the required services. The booking status (pending, accepted, or canceled) is displayed in the user's account, with management handled by the assigned pet carer.
User-Friendly Interface:

Intuitive platform design allows users to edit their information or delete their profiles easily, ensuring flexibility and control over their accounts.

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
      <td><code>/perfil/:id/reservas</code></td>
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
    <tr>
      <th>POST</th>
      <td><code>/perfil/reservas/acceptar/:id</code></td>
      <td>Aceptar reserva (handler)</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>POST</th>
      <td><code>/perfil/reservas/cancelar/:id</code></td>
      <td>Cancelar reserva (handler)</td>
      <td></td>
      <td>✔️</td>
    </tr>
  </tbody>
</table>
