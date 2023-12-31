<?php

namespace App\Mail;
use App\Appointment;
use App\User;


use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AppointmentCreated extends Mailable
{
    use Queueable, SerializesModels;
    public $appointment;
    public $user;
 
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Appointment $appointment, User $user)
    {
        
        $this->appointment = $appointment;
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.appointment_created')
                    ->subject('Appointment Created - Confirmation');
    }
}
