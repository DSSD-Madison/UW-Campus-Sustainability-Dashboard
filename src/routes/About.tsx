"use client"

import { motion } from "framer-motion";
import { 
  Leaf, 
  LineChart, 
  Building2, 
  Users, 
  Award, 
  BookOpen, 
  Globe, 
  Lightbulb, 
  Code, 
  BarChart,
  Clock
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[hsl(var(--wsbackground))]"
    >
      {/* Hero Section - Enhanced with more dynamic elements */}
      <section className="w-full bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white py-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-white"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="bg-white/20 p-5 rounded-full inline-block backdrop-blur-sm shadow-lg">
                <Leaf className="w-14 h-14 text-white" />
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-red-200">UW-Madison</span> Campus<br />Sustainability Dashboard
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto leading-relaxed"
            >
              Transforming energy data into actionable insights for a greener, more sustainable campus community
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10"
            >
              <Button className="bg-white text-green-800 hover:bg-green-50 font-medium px-8 py-6 h-auto text-lg rounded-lg shadow-lg transition-all"
                onClick={() => window.location.href="/"
              }>
                Explore the Dashboard
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Purpose - Refined from Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-block bg-green-100 p-3 rounded-lg mb-2">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The UW-Madison Campus Sustainability Dashboard represents our commitment to environmental stewardship and data-driven decision making. We believe that transparency and accessibility of energy consumption data is essential to reducing our environmental impact.
              </p>
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Created By Students, For Everyone</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This dashboard was developed by the DSSD Madison team, a group of student innovators passionate about leveraging technology for sustainability. We've designed this tool to serve the entire campus community—from administrators making policy decisions to students curious about their dorm's energy efficiency.
                </p>
              </div>
              <div className="pt-6">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-6 h-auto text-lg rounded-lg shadow-md">
                  Learn More About DSSD
                </Button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-green-100 rounded-lg -z-10" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-100 rounded-lg -z-10" />
                <img 
                  src="/api/placeholder/800/600" 
                  alt="Student-led sustainability initiatives" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover z-10 relative border-4 border-white"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics - New Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-medium">Our Impact</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 mb-3">
              Making a Measurable Difference
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
              The dashboard has helped identify opportunities for energy optimization across campus
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "15%",
                description: "Average reduction in energy usage across monitored buildings since implementation",
                icon: <Zap className="w-10 h-10 text-purple-600" />,
                color: "bg-purple-100",
              },
              {
                metric: "3,500+",
                description: "Students actively engaging with sustainability data each semester",
                icon: <Users className="w-10 h-10 text-blue-600" />,
                color: "bg-blue-100",
              },
              {
                metric: "$240K",
                description: "Estimated annual cost savings from improved energy efficiency",
                icon: <BarChart className="w-10 h-10 text-green-600" />,
                color: "bg-green-100",
              },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`${stat.color} p-5 rounded-2xl mb-6`}>
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">{stat.metric}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Key Features Section - Enhanced with more dynamic design */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
              <Lightbulb className="w-5 h-5 text-green-600" />
              <span className="text-green-800 font-medium">Dashboard Features</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Insights at Your Fingertips
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dashboard provides comprehensive tools to monitor and improve campus sustainability
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Historic Monitoring",
                description: "Keep track of electricity consumption data as it happens across all campus residence halls.",
                icon: <LineChart className="w-10 h-10 text-green-600" />,
                color: "bg-green-100",
              },
              {
                title: "Time Period Comparisons",
                description: "Compare energy efficiency metrics across different months to see common patterns and trends.",
                icon: <Building2 className="w-10 h-10 text-blue-600" />,
                color: "bg-blue-100",
              },
              {
                title: "Usage Insights",
                description: "Understand how occupancy, seasons, and events affect consumption patterns throughout the year.",
                icon: <Users className="w-10 h-10 text-amber-600" />,
                color: "bg-amber-100",
              },
              {
                title: "Performance Leaderboards",
                description: "Celebrate and recognize halls demonstrating exceptional energy conservation achievements.",
                icon: <Award className="w-10 h-10 text-teal-600" />,
                color: "bg-teal-100",
              },
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className={`${feature.color} p-6 rounded-2xl mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborative Partners Section - Enhanced with more visual appeal */}
      <section className="py-20 bg-white relative">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-green-100 rounded-full opacity-50"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-medium">Collaborative Effort</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Project Partners
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              This dashboard is the result of a strategic partnership between three key UW-Madison organizations
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 justify-items-center">
            {[{
              title: "Office of Sustainability",
              icon: <Leaf className="w-10 h-10 text-green-600" />,
              bg: "bg-green-100",
              content: "Leads campus-wide sustainability initiatives and provides strategic guidance on environmental metrics. Their expertise ensures the dashboard aligns with UW-Madison's broader sustainability goals."
            }, {
              title: "University Housing",
              icon: <Building2 className="w-10 h-10 text-blue-600" />,
              bg: "bg-blue-100",
              content: "Manages residence halls and provides critical data on energy consumption, building occupancy, and infrastructure details needed to contextualize efficiency metrics."
            }, {
              title: "DSSD Madison",
              icon: <Code className="w-10 h-10 text-purple-600" />,
              bg: "bg-purple-100",
              content: "Our student-led software development team that designed and built this dashboard. We combined technical skills with sustainability passion to create an accessible tool for the entire campus community."
            }].map((partner, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 w-full max-w-sm mx-auto rounded-xl overflow-hidden">
                  <div className={`h-2 ${partner.bg.replace('bg-', 'bg-')}00`}></div>
                  <CardContent className="p-8">
                    <div className={`${partner.bg} p-4 rounded-2xl inline-flex mb-6`}>
                      {partner.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{partner.title}</h3>
                    <p className="text-gray-600">{partner.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data & Methodology - Enhanced with more detail and visual structure */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-16 text-center">
              <div className="inline-block bg-blue-100 p-3 rounded-lg mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Data & Methodology</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We employ a rigorous approach to data collection and analysis, ensuring accuracy and relevance to campus sustainability goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={itemVariants}>
                <Card className="border-0 shadow-md h-full mx-auto rounded-xl overflow-hidden">
                  <div className="h-2 bg-green-600"></div>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-5">Data Sources & Collection</h3>
                    <ul className="space-y-4 text-left">
                      {[
                        "Building-level electricity meters that record consumption in kilowatt-hours (KWH)",
                        "UW-Madison Facilities management systems tracking usage patterns across campus",
                        "Residence hall occupancy records to normalize data based on building capacity",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="bg-green-100 p-2 rounded-full mt-1 flex-shrink-0">
                            <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                          </div>
                          <p className="text-gray-600">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Card className="border-0 shadow-md h-full mx-auto rounded-xl overflow-hidden">
                  <div className="h-2 bg-blue-600"></div>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-5">Analysis & Methodology</h3>
                    
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-full bg-blue-100">
                          <Clock className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="font-bold text-gray-800">Data Refresh Schedule</h4>
                      </div>
                      <p className="text-gray-600 pl-11">
                        Our dashboard updates monthly with the latest energy consumption data from university systems, with a typical 2-week lag for data processing and validation.
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-full bg-amber-100">
                          <BarChart className="w-5 h-5 text-amber-600" />
                        </div>
                        <h4 className="font-bold text-gray-800">Normalization Methods</h4>
                      </div>
                      <p className="text-gray-600 pl-11">
                        We normalize energy consumption by square footage and occupancy levels to enable fair comparisons between buildings of different sizes and uses.
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-full bg-purple-100">
                          <Lightbulb className="w-5 h-5 text-purple-600" />
                        </div>
                        <h4 className="font-bold text-gray-800">Insights Generation</h4>
                      </div>
                      <p className="text-gray-600 pl-11">
                        Our analytics algorithms in the future will identify usage patterns, anomalies, and trends to highlight potential energy saving opportunities and best practices.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action Section - New */}
      {/* <section className="py-16 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">
              Ready to Make a Difference?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl mb-8">
              Explore the dashboard and join our campus-wide sustainability efforts.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-700 hover:bg-green-50 font-medium px-8 py-4 h-auto text-lg rounded-lg">
                View Dashboard
              </Button>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-4 h-auto text-lg rounded-lg">
                Contact the Team
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section> */}
    </motion.div>
  );
}