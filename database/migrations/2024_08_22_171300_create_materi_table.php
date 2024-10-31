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
    Schema::create('materi', function (Blueprint $table) {
      $table->id();
      $table->string('title', 255);
      $table->text('description')->nullable();
      $table->text('content');
      $table->enum('kelas', ['VII', 'VIII', 'IX']);
      $table->string('slug');
      $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
      $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
      $table->foreignId('updated_by')->constrained('users')->onDelete('cascade')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('materi');
  }
};
