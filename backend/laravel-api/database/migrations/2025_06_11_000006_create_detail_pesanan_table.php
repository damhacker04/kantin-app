<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('detail_pesanan', function (Blueprint $table) {
    $table->unsignedBigInteger('id_pesanan');
    $table->unsignedBigInteger('id_menu');
    $table->integer('jumlah');
    $table->timestamps();

    $table->primary(['id_pesanan', 'id_menu']);

    $table->foreign('id_pesanan')
        ->references('id_pesanan')->on('pesanan')
        ->onUpdate('cascade')
        ->onDelete('cascade');

    $table->foreign('id_menu')
        ->references('id_menu')->on('menu')
        ->onUpdate('cascade')
        ->onDelete('restrict');
});

    }

    public function down(): void {
        Schema::dropIfExists('detail_pesanan');
    }
};
