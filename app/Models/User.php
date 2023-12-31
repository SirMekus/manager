<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_secret',
        //'id',
        'auth_token',
        'subscription',
        'two_factor_confirmed_at',
        'two_factor_recovery_codes',
        //'created_at',
        'updated_at',
        //'deleted_at',
        'auth_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'name'=>'array',
    ];

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
   
    public function setPasswordAttribute($password)
	{
		$this->attributes['password'] = Hash::make($password);
	}

    public function getDpAttribute($value)
    {
        return !empty($value) ? $value : 'avatar.png';
    }
}
