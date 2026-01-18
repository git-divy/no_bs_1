"use client";

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ChevronRight, Trophy, Code, BookOpen } from 'lucide-react';
import { UPCOMING_EVENTS, PAST_EVENTS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function EventsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const eventTypeIcons = {
    Workshop: BookOpen,
    Hackathon: Code,
    Masterclass: Trophy,
  };

  return (
    <section id="events" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6"
            >
              <Calendar className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-medium text-green-300">Our Events</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Learn, Build, and
              <span className="block gradient-text">Connect</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Join our exciting lineup of workshops, hackathons, and networking events.
              From beginner-friendly sessions to advanced technical challenges, there's something for everyone.
            </p>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-white">Upcoming Events</h3>
              <Button variant="outline" className="hidden sm:flex">
                View All Events
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {UPCOMING_EVENTS.map((event, index) => {
                const IconComponent = eventTypeIcons[event.type as keyof typeof eventTypeIcons];
                return (
                  <motion.div
                    key={event.title}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card glass hover className="h-full overflow-hidden group">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                            <IconComponent className="w-4 h-4 text-blue-400 mr-2" />
                            <span className="text-sm font-medium text-blue-300">{event.type}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-gray-300">{event.date}</div>
                          </div>
                        </div>

                        <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors">
                          {event.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {event.description}
                        </p>

                        <div className="space-y-2 mb-6">
                          <div className="flex items-center text-sm text-gray-400">
                            <Clock className="w-4 h-4 mr-2 text-green-400" />
                            {event.time}
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <MapPin className="w-4 h-4 mr-2 text-orange-400" />
                            {event.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <Users className="w-4 h-4 mr-2 text-purple-400" />
                            {event.attendees} attending
                          </div>
                        </div>

                        <Button className="w-full" variant="glass">
                          Register Now
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Past Events Timeline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-8">Past Events</h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-green-500/50" />

              <div className="space-y-8">
                {PAST_EVENTS.map((event, index) => (
                  <motion.div
                    key={event.title}
                    variants={itemVariants}
                    className="relative flex items-start space-x-6"
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 relative z-10"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    />

                    {/* Event Card */}
                    <Card glass className="flex-1 ml-4">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-xl font-bold text-white mb-2 sm:mb-0">
                            {event.title}
                          </h4>
                          <div className="text-sm font-medium text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                            {event.date}
                          </div>
                        </div>

                        <p className="text-gray-400 mb-3">
                          {event.description}
                        </p>

                        <div className="flex items-center text-sm text-gray-400">
                          <Users className="w-4 h-4 mr-2 text-green-400" />
                          {event.attendees} attendees
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <Card glass className="p-8 max-w-2xl mx-auto">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Want to Host an Event?
                </h3>
                <p className="text-gray-400 mb-6">
                  Have an idea for a workshop, hackathon, or technical talk?
                  We'd love to collaborate with you!
                </p>
                <Button variant="glass" size="lg">
                  Get in Touch
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}