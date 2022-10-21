from django.http import JsonResponse
from datetime import datetime

def index(request):
    now = datetime.now()
    year = str(now.year)
    month = str(now.month)
    day = str(now.day)
    hours = str(now.hour)
    minutes = str(now.minute)
    seconds = str(now.second)
    data = {"year": year, "month": month, "day": day, "hours": hours, "minutes": minutes, "seconds": seconds}
    
    return JsonResponse(data)
