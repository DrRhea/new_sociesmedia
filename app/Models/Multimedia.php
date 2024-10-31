<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Multimedia extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'title',
        'description',
        'media',
        'status',
        'slug',
        'created_by'
    ];
}
