<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Materi extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'content',
        'kelas',
        'slug',
        'status',
        'created_by'
    ];
}
