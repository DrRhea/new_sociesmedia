<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peneliti extends Model
{
    use HasFactory;
    
    protected $table = 'researchers';

    protected $fillable = [
        'name',
        'email',
        'field_of_study',
        'biography',
        'contact_info',
        'picture',
        'sinta_id',
        'status',
    ]; 
}
