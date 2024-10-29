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
    Schema::create('forum_threads', function (Blueprint $table) {
      $table->id();
      $table->string('title', 255);
      $table->string('slug', 255)->unique(); // SEO-friendly URL
      $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
      $table->unsignedBigInteger('views')->default(0); // Jumlah tampilan
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('forum_threads');
  }
};
