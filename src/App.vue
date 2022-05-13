<template>
  <div id="app" class="pagina">
    <NavBar />
    <h3 class="subtitulo">Home / <u>Report & Insights</u></h3>
           <button class="switch" id="switch">
           <span class="dm"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
           <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
           </svg></span>
           <span class="dm"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
           <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
           </svg></span>
           </button>
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


var moment = require("moment");
export default {
  name: 'app',
  components: {
    NavBar,
    GraficoT,
    
  },
  data: () => ({
    users: [],
    moment: moment
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