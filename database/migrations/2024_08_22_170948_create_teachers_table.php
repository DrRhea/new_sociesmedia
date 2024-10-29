<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('teachers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unique()->constrained('users')->onDelete('cascade');
            $table->string('nip')->nullable(); // Nomor Induk Pegawai (NIP)
            $table->enum('gender', ['male', 'female']);
            $table->date('birth_date');
            $table->text('address')->nullable();
            $table->enum('position', ['class_teacher', 'subject_teacher', 'headmaster']); // Jabatan
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teachers');
    }
};
