<h1>Walk My Dog </h1>

Walk My Dog is a service designed to meet the needs of pet owners who require assistance with their beloved pets while they are away from home or occupied with other responsibilities. 
The platform facilitates seamless communication and coordination between three main roles: Admin, Client (pet owner), and Pet Carer.
<hr>

<h3>Key Features:</h3>

<h4>User Roles:</h4>

Admin: Has access to all user profiles, enabling the viewing and deleting information as needed.
Client (Pet Owner): Can access the platform to view a map displaying available pet care services. The map displays markers corresponding to services in the user's neighborhood by selecting specific criteria and pressing a button. Additionally, users can view registered pet carers in their area.
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
      <td>Home Page</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>GET</th>
      <td><code>/servicios</code></td>
      <td>Services</td>
      <td></td>
      <td></td>
    </tr>
     <tr>
      <th>GET</th>
      <td><code>/login</code></td>
      <td>LogIn form(render)</td>
      <td></td>
      <td></td>
    </tr>
     <tr>
      <th>POST</th>
      <td><code>/login</code></td>
      <td>LogIn form (handler)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>GET</th>
      <td><code>/signup</code></td>
      <td>Sign up form (render)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>POST</th>
      <td><code>/signup</code></td>
      <td>Sign up form (handler)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>GET</th>
      <td><code>/listado-usuarios/</code></td>
      <td>User list (Admin panel)</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>GET</th>
      <td><code>/api/userlist</code></td>
      <td>Carers list</td>
      <td>✔️</td>
      <td></td>
    </tr>
    <tr>
      <th>GET</th>
      <td><code>/api/services</code></td>
      <td>Internal acces to places of interest</td>
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
      <td>Carers list</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>GET</th>
      <td><code>/cuidadores/:id</code></td>
      <td>Profile details</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
    <th>GET</th>
      <td><code>/cuidadores/:id/reservar</code></td>
      <td>Create booking</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
    <th>POST</th>
      <td><code>/cuidadores/:id/reservar</code></td>
      <td>Create booking (handler)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
    <th>GET</th>
      <td><code>/cuidadores/:id/comentar</code></td>
      <td>Leave comment (render)</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
    <th>POST</th>
      <td><code>/cuidadores/:id/comentar</code></td>
      <td>Leave comment (handler)</td>
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
      <td>User profile</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>GET</th>
      <td><code>/perfil/editar/:id</code></td>
      <td>Edit profile (render)</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>POST</th>
      <td><code>/perfil/editar/:id</code></td>
      <td>Edit profile (handler)</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>POST</th>
      <td><code>/perfil/eliminar/:id</code></td>
      <td>Delete profile (handler)</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>GET</th>
      <td><code>/perfil/:id/reservas</code></td>
      <td>Booking list</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>POST</th>
      <td><code>/perfil/reservas/eliminar/:id</code></td>
      <td>Delete booking (handler)</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>GET</th>
      <td><code>/perfil/reservas/edit/:id</code></td>
      <td>Edit booking (render)</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>POST</th>
      <td><code>/perfil/reservas/edit/:id</code></td>
      <td>Edit booking (handler)</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>POST</th>
      <td><code>/perfil/reservas/acceptar/:id</code></td>
      <td>Accept booking (handler)</td>
      <td></td>
      <td>✔️</td>
    </tr>
    <tr>
      <th>POST</th>
      <td><code>/perfil/reservas/cancelar/:id</code></td>
      <td>Cancel booking (handler)</td>
      <td></td>
      <td>✔️</td>
    </tr>
  </tbody>
</table>
