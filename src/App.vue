<template>
  <div id="app" class="pagina" :class="mode">
    <NavBar :mode="mode" @toggle="toggle"/>
    <h3 class="subtitulo">Home / <u>Report & Insights</u></h3>
           <SwitchB />   
       <div class="pie-tabla">
       <div class="torta">
         <br>
         <div class="pietexto">
         <h3>Why do you create a start up?</h3>
         <h4 class="subpie">Trends</h4>
         </div>
         <br>
         <br>
        <GraficoT class="pie1"/>
       </div>
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
            <div class="imagen">
            <li v-for="user in users" :key="user.id">
            <img :src="user.profile_img" alt="user.image" />
            </li>
            </div>
          </ul>
        </td>
        <td>
          <ul>
            <div class="nombre">
            <li v-for="user in users" :key="user.id">
                   {{ user.first_name }}
                   {{ user.last_name }}
                   <div class="mail">
                   {{ user.email }}
                   </div>
            </li>
            </div>
          </ul>
        </td>
         <td>
          <ul>
               <div class="espaciolg">
               <li v-for="user in users" :key="user.id">
               {{ moment(user.sessions[0]).fromNow() }}
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
                 <li v-for="user in users" :key="user.id" :style="user.status==false ? 'color:red' : 'color:green'" class="sessions">
                 {{ user.status ? "Active" : "Inactive" }}
                 </li>
                 </div>
         </ul>
         </td>
                  <td>
           <ul>
                <div class="down">
                <li v-for="user in users" :key="user.id">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-4 ml-3" viewBox="0 0 20 20" fill="currentColor">
                 <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                 </svg>
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
  </div>
</template>

<script>
import NavBar from "../src/components/NavBar/NavBar.vue"
import GraficoT from "../src/components/Grafico/GraficoT.vue"
import SwitchB from "../src/components/SwitchB/SwitchB.vue"


var moment = require("moment");
export default {
  name: 'app',
  components: {
    NavBar,
    GraficoT,
    SwitchB
    
  },
  data: () => ({
    users: [],
    moment: moment,
    mode: ''
  }),
  methods: {
    getLastLogin(sessions) {
      const getLastLogin = Math.max (
        ...sessions.map((e) => {
          const date = new Date(e).getTime();
          return date;
        })
      );
      return moment(getLastLogin).fromNow();
    },
     toggle () {
      if (this.mode === "dark") {
        this.mode = "pagina"
      } else {
        this.mode = "dark"
      }
    }
  },
  
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
  transition: background 0.3 ease-in-out;
}

.dark {
  background: #192734;
}

.titulo {
  margin-left: 20px;
  font-size: 20px;
}

.subtitulo {
  color: grey;
  margin-left: 10px;
}

.torta {
  background-color: rgba(255, 255, 255, 0.808);
  border-radius: 10px;
  margin-top: 10px;
  border: 2px solid rgba(236, 235, 235, 0.507);
  margin-left: 10px;
  height: 600px;
}

.pie1 {
 width: 400px;
 height: 400px;
}

.tabla {
  background-color: rgba(255, 255, 255, 0.808);
  border-radius: 10px;
  width: 960px;
  margin-left: 40px;
  margin-top: 10px;
  border: 2px solid rgba(236, 235, 235, 0.507);
  height: 600px;
}
.tabla1 {
  border: 2px solid rgba(236, 235, 235, 0.507);
  border-radius: 10px;
  width: 930px;
  margin-left: 10px;
  border-collapse: separate;
  border-spacing: 70px 10px;
  font-size: 13px;
  height: 515px;
}

.mail {
  color: gray;
}

.espacio {
  line-height: 40px;
  margin-bottom: 170px;
}

.down {
  margin-left: -40px;
  margin-bottom: 200px;
   color: grey;
}

.espaciolg {
  line-height: 22px;
  margin-bottom: 150px;
  color: grey;
}

.columnas {
  color: grey;
  border: 1px solid #000;;
}

.switch {
  background: #343D5B;
  border-radius: 1000px;
  border: none;
  position: relative;
  cursor: pointer;
  display: flex;
  outline: none;
  margin-left: 1346px;

}

.dm {
  width: 17px;
  height: 17px;
  line-height: 30px;
  display: block;
  background: none;
  color: white;
  margin-left: 7px;
  margin-top: 6px;
}

.sessions {
  display: flex;
}

.pie-tabla {
  display: flex;
}

.imagen {
  margin-bottom: 130px;
  line-height: 25px;
}

.nombre {
  margin-bottom: 150px;
  line-height: 20px;
}

.subpie {
  color: gray;
  font-size: 16px;
}

.pietexto {
  margin-left: 15px;
}

</style>