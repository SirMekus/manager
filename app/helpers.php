<?php
//require_once(doc.'/webloit/vendor/ezyang/htmlpurifier/library/HTMLPurifier.auto.php');
use Carbon\Carbon;
use App\Providers\RouteServiceProvider;
use Illuminate\Mail\Markdown;

function carbon($date_time=null)
{
	return new Carbon($date_time);
}
?>