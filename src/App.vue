<template>
  <div id="app" class="pagina">
    <NavBar />
        <h3 class="subtitulo">Home / <u>Report & Insights</u></h3>
    <br>
    <div class="tabla">
    <table class="table-auto">
      <thead>
        <br>
        <h2 class="titulo">Employees</h2>
        <br>
      </thead>
      <div class="tabla1">
  <thead>
    <br>
    <tr class="columnas">
      <th>Employee</th>
      <th></th>
      <th class="lg">LastLogin</th>
      <th>Department</th>
      <th>Status</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <ul>
        <li v-for="user in users" :key="user.id">
       <img src={user.profile_img} alt="imagen-user.image" />
        </li>
        </ul>
      </td>
     <td>
      <ul>
        <li v-for="user in users" :key="user.id">
        {{ user.first_name }}
        {{ user.last_name }}
       <div class="mail">
        {{ user.email }}
        </div>
        </li>
     </ul>
     </td>
     <td>
      <ul>
       <div class="espaciolg">
        <li v-for="user in users" :key="user.id">
        {{ moment("user.sessions").fromNow() }}
        </li>
        </div>
     </ul>
     </td>
          <td>
      <ul>
               <div class="espacio">
        <li v-for="user in users" :key="user.id">
       {{ user.department }}
        </li>
        </div>
     </ul>
     </td>
          <td>
      <ul>
            <div class="espacio">
        <li v-for="user in users" :key="user.id" v-bind:style="user.status==false ? 'color:red' : 'color:green' ">
      {{ user.status }}
        </li>
        </div>
     </ul>
     </td>
   </tr>
  </tbody>
      </div>
</table>
<br>
    </div>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import NavBar from "../src/components/NavBar/NavBar.vue"
var moment = require("moment");
export default {
  name: 'app',
  components: {
    NavBar
  },
  data: () => ({
    users: [],
    moment: moment
  }),
  async mounted() {
    // Users
    const userResponse = await fetch('/api/users');
    const users = await userResponse.json();
    this.users = users.users;
    // Reports
    const reportResponse = await fetch('/api/reports');
    const reports = await reportResponse.json();
    return {users}
  }
}
</script>

<style>
.pagina {
  background-color: rgb(248, 248, 248);
}

.titulo {
  margin-left: 20px;
  font-size: 20px;
}

.subtitulo {
  color: grey;
}

.tabla {
  background-color: rgba(255, 255, 255, 0.808);
  border-radius: 10px;
  width: 1000px;
  margin-left: 400px;
  border: 2px solid rgba(236, 235, 235, 0.507);
}
.tabla1 {
  border: 2px solid rgba(236, 235, 235, 0.507);
  border-radius: 10px;
  width: 950px;
  margin-left: 20px;
  border-collapse: separate;
  border-spacing: 70px 10px;
}

.mail {
  color: gray;
}

.espacio {
  line-height: 50px;
}

.columnas {
  color: grey;
}

</style>