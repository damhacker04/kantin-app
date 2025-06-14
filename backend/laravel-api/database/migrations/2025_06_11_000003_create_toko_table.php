<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
       Schema::create('toko', function (Blueprint $table) {
    $table->id('id_toko');
    $table->string('nama_toko', 50);
    $table->unsignedBigInteger('id_penjual');
    $table->timestamps();

    $table->foreign('id_penjual')
        ->references('id_penjual')->on('penjual')
        ->onUpdate('cascade')
        ->onDelete('restrict');
});

    }

    public function down(): void {
        Schema::dropIfExists('toko');
    }
};
