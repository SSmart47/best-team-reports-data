const firebaseConfig={apiKey:"AIzaSyAqCTjwhTzgLUV_HrGLhdxjxx5nFR4g0Sg",authDomain:"betsteamreportsdata.firebaseapp.com",databaseURL:"https://betsteamreportsdata-default-rtdb.firebaseio.com",projectId:"betsteamreportsdata",storageBucket:"betsteamreportsdata.appspot.com",messagingSenderId:"507208715373",appId:"1:507208715373:web:2f6188e8252c868f8a0364"};firebase.initializeApp(firebaseConfig);var username=localStorage.getItem("ss47_bestteamreportsdata_user_i"),_u_n_=localStorage.getItem("ss47_bestteamreportsdata_user_n");function JsonToList(e){var t,a=e,s=[];for(t in a)s.push([t,a[t]]);return s}document.getElementById("id_exit_uname").innerHTML=_u_n_,document.getElementById("id_users_name").innerHTML=_u_n_,CheckUser();async function ObjectList(){var t=[];return await firebase.database().ref().child("objects").get().then(e=>{e.exists()?(e=e.val(),t=JsonToList(e)):console.log("Error in Server!")}).catch(e=>{alert("No Connection!"),console.error(e)}),t}async function CheckUser(){firebase.database().ref().child("users").child(username).get().then(e=>{e.exists()?((e=e.val()).nick=_u_n_,firebase.database().ref("users/"+username).set(e)):firebase.database().ref("users/"+username).set({nick:_u_n_,visibility:"1"})}).catch(e=>{alert("No Connection!"),console.error(e)})}document.getElementById("id_btn_exit").onclick=function(){localStorage.setItem("ss47_bestteamreportsdata_user_i",""),localStorage.setItem("ss47_bestteamreportsdata_user_n","")},document.getElementById("id_btn_my_reports").onclick=function(){localStorage.setItem("ss47_bestteamreportsdata_user_i",username),localStorage.setItem("ss47_bestteamreportsdata_user_n",_u_n_),window.location="pages/myreports/myreports.html"},document.getElementById("id_btn_my_data").onclick=function(){localStorage.setItem("ss47_bestteamreportsdata_user_i",username),localStorage.setItem("ss47_bestteamreportsdata_user_n",_u_n_),window.location="pages/mydata/mydata.html"},document.getElementById("id_btn_all_users").onclick=function(){localStorage.setItem("ss47_bestteamreportsdata_user_i",username),localStorage.setItem("ss47_bestteamreportsdata_user_n",_u_n_),window.location="pages/allusers/allusers.html"};
