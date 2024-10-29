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
    Schema::create('media', function (Blueprint $table) {
      $table->id();
      $table->enum('type', ['video', 'podcast', 'poster', 'games']);
      $table->string('title', 255);
      $table->string('url', 255)->nullable();
      $table->string('thumbnail', 255);
      $table->text('description')->nullable();
      $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
      $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('media');
  }
};