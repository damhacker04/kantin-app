<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('pesanan', function (Blueprint $table) {
            $table->id('id_pesanan');
            $table->unsignedBigInteger('id_pembeli')->nullable();
            $table->date('tanggal_pesanan');
            $table->string('status', 50)->default('Pending');
            $table->decimal('total', 10, 2); // ← Tambahkan kolom total
            $table->timestamps();

            $table->foreign('id_pembeli')
                ->references('id_pembeli')->on('pembeli')
                ->onUpdate('cascade')
                ->onDelete('restrict');
        });
    }

    public function down(): void {
        Schema::dropIfExists('pesanan');
    }
};
