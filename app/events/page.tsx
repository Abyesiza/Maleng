"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function EventsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const events = [
    {
      id: 1,
      title: "Parent-Teacher Conference",
      date: "2024-04-15",
      time: "14:00 - 18:00",
      location: "School Hall",
      category: "Meeting",
      description: "Individual meetings with teachers to discuss student progress"
    },
    {
      id: 2,
      title: "Sports Day",
      date: "2024-04-20",
      time: "09:00 - 15:00",
      location: "School Grounds",
      category: "Sports",
      description: "Annual sports day featuring various athletic competitions"
    },
    {
      id: 3,
      title: "Science Fair",
      date: "2024-04-25",
      time: "10:00 - 14:00",
      location: "School Hall",
      category: "Academic",
      description: "Students showcase their science projects"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Meeting: "bg-blue-100 text-blue-800",
      Sports: "bg-green-100 text-green-800",
      Academic: "bg-purple-100 text-purple-800",
      Cultural: "bg-red-100 text-red-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">School Events Calendar</h1>
          <p className="text-gray-600">Stay updated with all school activities and events</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6 col-span-1">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              Calendar
            </h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
            {events.map((event) => (
              <Card key={event.id} className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <Badge className={`${getCategoryColor(event.category)} mb-3`}>
                      {event.category}
                    </Badge>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}