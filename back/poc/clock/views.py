from django.http import JsonResponse
from datetime import datetime, timezone, timedelta

def index(request):
    timezone_offset = +2.0
    tzinfo = timezone(timedelta(hours=timezone_offset))
    now = datetime.now(tzinfo)
    year = str(now.year)
    month = str(now.month)
    day = str(now.day)
    hours = str(now.hour)
    minutes = str(now.minute)
    seconds = str(now.second)
    data = {"year": year, "month": month, "day": day, "hours": hours, "minutes": minutes, "seconds": seconds}
    
    return JsonResponse(data)
