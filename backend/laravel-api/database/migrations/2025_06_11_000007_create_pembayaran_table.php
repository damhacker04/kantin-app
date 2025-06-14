<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
       Schema::create('pembayaran', function (Blueprint $table) {
    $table->id('id_pembayaran');
    $table->unsignedBigInteger('id_pesanan');
    $table->date('tanggal');
    $table->decimal('jumlah', 15, 2);
    $table->string('status', 50);
    $table->string('metode', 50);
    $table->timestamps();

    $table->foreign('id_pesanan')
        ->references('id_pesanan')->on('pesanan')
        ->onUpdate('cascade')
        ->onDelete('restrict');
});

    }

    public function down(): void {
        Schema::dropIfExists('pembayaran');
    }
};
