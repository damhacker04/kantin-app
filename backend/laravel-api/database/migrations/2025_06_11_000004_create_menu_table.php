<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
       Schema::create('menu', function (Blueprint $table) {
    $table->id('id_menu');
    $table->string('nama_menu', 50);
    $table->text('deskripsi')->nullable();
    $table->decimal('harga', 15, 2);
    $table->unsignedBigInteger('id_toko');
    $table->timestamps();

    $table->foreign('id_toko')
        ->references('id_toko')->on('toko')
        ->onUpdate('cascade')
        ->onDelete('restrict');
});

    }

    public function down(): void {
        Schema::dropIfExists('menu');
    }
};
