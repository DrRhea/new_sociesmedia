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
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unique()->constrained('users')->onDelete('cascade');
            $table->string('nis')->nullable();
            $table->string('place');
            $table->date('birth_date');
            $table->enum('gender', ['male', 'female']);
            $table->string('phone', 20)->nullable();
            $table->longText('address');
            $table->text('school');
            $table->enum('grade', ['7', '8', '9']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
