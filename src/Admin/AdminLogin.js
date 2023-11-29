import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

function Login(props) {

    const navigate = useNavigate();
    const [login, setLogin] = useState(true)
    const [fresh,setFresh]=useState(true)

    const initialState = {
        username: "",
        password: "",

    };
    const [log, setLog] = useState([]);
    const [state, setState] = useState(initialState)
    const { username, password } = state;

    useEffect(() => {
        getUsers();
       
    }, [])
  
    const getUsers = async () => {
        const response = await axios.get(" https://client-portfolio-qum8.onrender.com/login");
        console.log(response.status);
        if (response.status === 200) {
            
            console.log(response.data,'heheheheh')
            // console.log(log,'first')
           setLog(response.data)
        
            

        }
    };
    console.log(log)
    log.length>0 && (log).map((data)=>{
                return (
                (data.username===username && data.password===password)?setLog(data):console.log(data.id,'ledu bro')
               
                )
            })

     
    const hello = (log) => {
        props.change(log)
        navigate('/admin')
        alert('login successfully')
       
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert("Somthing was not filled");
            // setLogin(false)
        }
        
        else if(username && password){
            console.log(username,'uuser')
            // setFresh(!fresh)
            getUsers()  
            // getUsers()
         if (username === log.username && password === log.password) {
            
        //   alert(log.username)
           setLogin(true)
        //    navigate('/')
            hello(login)
        //     // props.change(login)
           
            
          }
        else{(alert('enter correct details'))}
          




    };}

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };
    if(props.count ==3){
        
        hello(log)
      }

    
    return (
        <div className='bgimg iimage'>
            <div className='container row  mx-auto '>
              <div className='  col-9 col-md-5 col-lg-8 mt-5  mx-auto '>
                {/* <img className='w-100 h-75' src='https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg'/> */}
                </div>
               
                {/* Admin login form */}
                <form onSubmit={handleSubmit}
                    className='logform container col-9 col-md-5 col-lg-4 mt-5 mx-auto mb-5 p-4 bg-light'>
                    <h4 className='text-primary text-center bg-yellow-200' >ADMIN</h4>
                     <div className='text-center'>
                    <div class="mb-3 ">
                        <label htmlFor="exampleInputEmail1" class="form-label ">User Name</label><br/>
                        <input type="text"
                        required
                            id="username" name="username"
                            placeholder="Enter username..."
                            value={username}
                            onChange={handleInputChange}
                            class="form-control border-2 border-color-blue" aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label><br/>
                        <input type="password"
                        required
                            id="password" name="password"
                            placeholder="Enter password..."
                            value={password}
                            onChange={handleInputChange}
                            class="form-control border-2 border-color-blue" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="bg-green-300 p-2 rounded px-3">Access Admin page</button>
                    </div>
                </form>
                
            </div>
            
           
        </div>
    )
}

export default Login