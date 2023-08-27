<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Task;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $user = User::inRandomOrder()->first();
        
        return [
            'user_id' => $user->id,
            'title' => fake()->unique()->word(),
            'description' => fake()->unique()->paragraph(),
            'due_date' => now()->addDays(rand(-1, 2)), 
        ];
    }
}
