<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Materi extends Model
{
    use HasFactory;

    protected $table = 'materi';

    protected $fillable = [
        'title',
        'description',
        'thumbnail',
        'content',
        'grade',
        'slug',
        'status',
        'created_by',
        'updated_by'
    ];
}
