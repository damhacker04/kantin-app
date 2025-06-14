<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('pembeli', function (Blueprint $table) {
    $table->id('id_pembeli');
    $table->string('nama_lengkap', 100);
    $table->string('username', 50)->unique();
    $table->string('email')->unique();
    $table->string('password');
    $table->timestamps();
});

    }

    public function down(): void {
        Schema::dropIfExists('pembeli');
    }
};
