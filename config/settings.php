<?php 

return [
      'app_name' => env('APP_NAME', 'Manager'),
	
  //This is the email that any reply from user will be sent to after they receive any email from us.
  'email' => [
      'reply_to'=>env('REPLY_TO'),
  ],


  'contact_email'=> env('CONTACT_EMAIL'),
  'contact_phone'=> env('CONTACT_PHONE'),
  'contact_twitter'=> env('CONTACT_TWITTER'),
  'contact_ig'=> env('CONTACT_IG'),
  'contact_linkedin'=> env('CONTACT_LINKEDIN'),
	]

?>