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
      Schema::create('researchers', function (Blueprint $table) {
          $table->id();
          $table->string('name', 255);
          $table->string('email', 255);
          $table->string('field_of_study', 255);
          $table->text('biography');
          $table->string('contact_info', 255);
          $table->string('picture', 255)->nullable();
          $table->string('google_scholar_id', 255)->unique()->nullable();
          $table->enum('status', ['active', 'inactive'])->default('active');
          $table->timestamps();
      });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('researchers');
    }
};
