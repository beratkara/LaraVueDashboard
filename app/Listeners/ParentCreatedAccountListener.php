<?php

namespace App\Listeners;

use App\Events\ParentCreatedAccount;
use App\Mail\SendParentMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class ParentCreatedAccountListener implements ShouldQueue
{
    use InteractsWithQueue;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  ParentCreatedAccount  $event
     * @return void
     */
    public function handle(ParentCreatedAccount $event)
    {
        $user = $event->getUser();

        Mail::to($user->email)->send(new SendParentMail($user));
    }
}
