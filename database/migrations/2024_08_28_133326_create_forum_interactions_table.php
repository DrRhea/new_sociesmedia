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
        Schema::create('forum_interactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('thread_id')->nullable()->constrained('forum_threads')->onDelete('cascade');
            $table->foreignId('post_id')->nullable()->constrained('forum_posts')->onDelete('cascade');
            $table->enum('interaction_type', ['like', 'share', 'downvote'])->default('like');
            $table->timestamps();

            // Menambahkan unique constraint dengan nama yang lebih pendek
            $table->unique(['user_id', 'thread_id', 'post_id', 'interaction_type'], 'interaction_unique');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('forum_interactions');
    }
};
