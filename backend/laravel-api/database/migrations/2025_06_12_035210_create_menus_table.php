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
       Schema::create('menus', function (Blueprint $table) {
    $table->id();
    $table->foreignId('kantin_id')->constrained('kantins')->onDelete('cascade');
    $table->string('nama_menu');
    $table->integer('harga');
    $table->text('deskripsi')->nullable();
    $table->string('gambar')->nullable();
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menus');
    }
};
