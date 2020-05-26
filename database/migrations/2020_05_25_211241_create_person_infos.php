<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreatePersonInfos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('person_infos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->uuid('uuid')->unique()->default(DB::raw('gen_random_uuid()'));
            $table->string('identity_number')->unique()->nullable();
            $table->enum('gender', ['male','female'])->nullable();
            $table->tinyInteger('age')->nullable();
            $table->json('birth_place')->nullable();
            $table->json('nationality')->nullable();
            $table->date('birth_day')->nullable();
            $table->uuid('owner')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('owner')
                ->references('uuid')
                ->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('person_info');
    }
}
