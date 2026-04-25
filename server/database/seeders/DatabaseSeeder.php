<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Gender;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Gender::factory()->createMany([
            ['gender' => 'Male'],
            ['gender' => 'Female'],
            ['gender' => 'Prefer Not to Say']
        ]);

        $birthDate = fake()->date();
        $age = date_diff(date_create($birthDate), date_create('now'))->y;

        User::factory()->create([
            'first_name' => 'Charlene Clyde',
            'middle_name' => 'Bunda',
            'last_name' => 'Arca',
            'suffix_name' => null,
            'gender_id' => Gender::inRandomOrder()->first()->gender_id,
            'birth_date' => $birthDate,
            'age' => $age,
            'username' => 'ChaClyde',
            'password' => 'ChaClyde'
        ]);

        User::factory(100)->create();
    }
}
