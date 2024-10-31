<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artikel extends Model
{
    use HasFactory;

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
