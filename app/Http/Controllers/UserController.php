<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \Firebase\JWT\JWT;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    
    protected function login(Request $request)
    {
        if (!isset($_POST['email']) or !isset($_POST['password'])) 
        {
            return $this->error(401, 'Debes rellenar todos los campos')->header('Access-Control-Allow-Origin', '*');
        }
        $email = $_POST['email'];
        $password = $_POST['password'];
        $key = $this->key;
        if (self::checkLogin($email, $password))
        {
            $array = $arrayName = array
            (
                 'email' => $email,
                 'password' => $password
            );
            $jwt = JWT::encode($array, $key);
            return response($jwt)->header('Access-Control-Allow-Origin', '*');
        }
        else
        {
            return response("Los datos no son correctos", 402)->header('Access-Control-Allow-Origin', '*');
        }
    }

    public function register (Request $request)
    {
        if (!isset($_POST['name']) or !isset($_POST['email']) or !isset($_POST['password'])) 
        {
            return $this->error(1, 'Debes rellenar todos los campos');
        }

        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        if (!empty($name) && !empty($email) && !empty($password))
        {
            try
            {
            $users = new User();
            $users->name = $name;
            $users->password = $password;
            $users->email = $email;
            $users->role_id = 2;

            $users->save();
        }
        catch(Exception $e)
            {
                return $this->error(2, $e->getMessage());
            }
            
            return $this->error(200, 'Usuario registrado correctamente');
        }
        else
        {
            return $this->error(401, 'Debes rellenar todos los campos');
        }
    }  
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }

}
