import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
  "Dashboard",
  "Users",
  "Bookings",
  "Programs",
  "Resources",
  "Events",
  "Email & Automation",
  "Blog",
  "Payments",
  "Settings",
];

const PlanBadge = ({ plan }: { plan: string }) => {
  let color = "";
  if (plan === "Basic") color = "bg-gray-200 text-gray-700";
  if (plan === "Intermediate") color = "bg-blue-100 text-blue-700";
  if (plan === "Advanced") color = "bg-green-100 text-green-700";
  if (plan === "Optional") color = "bg-yellow-100 text-yellow-700";
  return (
    <span className={`inline-block rounded px-2 py-1 text-xs font-semibold mb-4 mr-2 ${color}`}>{plan} Plan</span>
  );
};

const Admin = () => {
  const [active, setActive] = useState("Dashboard");
  const [showPopup, setShowPopup] = useState(true);

  return (
    <PageLayout>
      {/* Popup for plan info */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8 text-center relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setShowPopup(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="font-serif text-2xl mb-6 text-soul-blue">Advanced Plan Required</h2>
            <p className="text-soul-stone/80 mb-8 leading-relaxed">
              This dashboard is only available on our <span className="font-semibold text-soul-blue">Advanced Plan</span>.<br />
              Some features are marked as <span className="font-semibold text-yellow-700">Optional</span> add-ons and are not included by default.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="inline-block rounded px-3 py-1.5 text-sm font-semibold bg-green-100 text-green-700">Advanced Plan</span>
              <span className="inline-block rounded px-3 py-1.5 text-sm font-semibold bg-yellow-100 text-yellow-700">Optional</span>
            </div>
          </div>
        </div>
      )}
      <div className="flex min-h-screen bg-soul-cream/40">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-soul-cream py-8 px-4 hidden md:block">
          <h2 className="font-serif text-2xl mb-8 text-soul-blue">Admin Panel</h2>
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section}
                className={`block w-full text-left px-4 py-2 rounded font-medium transition-colors ${active === section ? "bg-soul-blue text-white" : "text-soul-stone hover:bg-soul-blue/10"}`}
                onClick={() => setActive(section)}
              >
                {section}
              </button>
            ))}
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-6 md:p-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {active === "Dashboard" && (
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <PlanBadge plan="Advanced" />
                </div>
                <h1 className="font-serif text-3xl mb-6 gradient-text">Dashboard Overview</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow p-6 text-center">
                    <div className="text-2xl font-bold text-soul-blue">120</div>
                    <div className="text-soul-stone/70">Total Users</div>
                  </div>
                  <div className="bg-white rounded-lg shadow p-6 text-center">
                    <div className="text-2xl font-bold text-soul-blue">8</div>
                    <div className="text-soul-stone/70">Upcoming Bookings</div>
                  </div>
                  <div className="bg-white rounded-lg shadow p-6 text-center">
                    <div className="text-2xl font-bold text-soul-blue">$2,500</div>
                    <div className="text-soul-stone/70">Revenue (This Month)</div>
                  </div>
                </div>
                {/* Bookings Calendar in Overview */}
                <div className="mb-8">
                  <h2 className="font-serif text-xl mb-4 text-soul-blue">Bookings Calendar</h2>
                  <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
                    <table className="min-w-[500px] w-full border-collapse text-center">
                      <thead>
                        <tr className="bg-soul-blue/10">
                          <th className="py-2 px-3">Mon</th>
                          <th className="py-2 px-3">Tue</th>
                          <th className="py-2 px-3">Wed</th>
                          <th className="py-2 px-3">Thu</th>
                          <th className="py-2 px-3">Fri</th>
                          <th className="py-2 px-3">Sat</th>
                          <th className="py-2 px-3">Sun</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-4 px-3">&nbsp;</td>
                          <td className="py-4 px-3">1<br /><span className="inline-block mt-2 px-2 py-1 rounded bg-soul-blue text-white text-xs">10:00am Booked</span></td>
                          <td className="py-4 px-3">2</td>
                          <td className="py-4 px-3">3<br /><span className="inline-block mt-2 px-2 py-1 rounded bg-soul-gold text-white text-xs">2:00pm Booked</span></td>
                          <td className="py-4 px-3">4</td>
                          <td className="py-4 px-3">5</td>
                          <td className="py-4 px-3">6</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-3">7</td>
                          <td className="py-4 px-3">8</td>
                          <td className="py-4 px-3">9<br /><span className="inline-block mt-2 px-2 py-1 rounded bg-soul-blue text-white text-xs">11:30am Booked</span></td>
                          <td className="py-4 px-3">10</td>
                          <td className="py-4 px-3">11</td>
                          <td className="py-4 px-3">12<br /><span className="inline-block mt-2 px-2 py-1 rounded bg-soul-gold text-white text-xs">1:00pm Booked</span></td>
                          <td className="py-4 px-3">13</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="font-serif text-xl mb-2 text-soul-blue">Most Downloaded Resources</h2>
                    <ul className="list-disc ml-6 text-soul-stone/80">
                      <li>Mindful Living PDF</li>
                      <li>Holistic Wellness Workbook</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="font-serif text-xl mb-2 text-soul-blue">Recent Signups</h2>
                    <ul className="list-disc ml-6 text-soul-stone/80">
                      <li>Jane Doe (jane@email.com)</li>
                      <li>Michael Lee (michael@email.com)</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {active === "Users" && (
              <div>
                <div className="flex flex-wrap gap-2 mb-2"><PlanBadge plan="Advanced" /></div>
                <h1 className="font-serif text-3xl mb-6 gradient-text">User Management</h1>
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <input className="border border-soul-cream rounded px-4 py-2 w-full mb-4" placeholder="Search users by name, email, or program..." />
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-soul-stone/70">
                        <th className="py-2">Name</th>
                        <th>Email</th>
                        <th>Program</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Jane Doe</td>
                        <td>jane@email.com</td>
                        <td>Mindful Living</td>
                        <td><Button size="sm" className="bg-soul-blue text-white">View</Button></td>
                      </tr>
                      <tr>
                        <td>Michael Lee</td>
                        <td>michael@email.com</td>
                        <td>Holistic Wellness</td>
                        <td><Button size="sm" className="bg-soul-blue text-white">View</Button></td>
                      </tr>
                    </tbody>
                  </table>
                  <Button className="mt-4 bg-soul-gold text-white">Export Users</Button>
                </div>
              </div>
            )}
            {active === "Bookings" && (
              <div>
                <div className="flex flex-wrap gap-2 mb-2"><PlanBadge plan="Advanced" /></div>
                <h1 className="font-serif text-3xl mb-6 gradient-text">Booking Management</h1>
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  {/* Static Calendar UI */}
                  <div className="mb-8">
                    <h2 className="font-serif text-xl mb-4 text-soul-blue">Calendar</h2>
                    <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
                      <table className="min-w-[500px] w-full border-collapse text-center">
                        <thead>
                          <tr className="bg-soul-blue/10">
                            <th className="py-2 px-3">Mon</th>
                            <th className="py-2 px-3">Tue</th>
                            <th className="py-2 px-3">Wed</th>
                            <th className="py-2 px-3">Thu</th>
                            <th className="py-2 px-3">Fri</th>
                            <th className="py-2 px-3">Sat</th>
                            <th className="py-2 px-3">Sun</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-4 px-3">&nbsp;</td>
                            <td className="py-4 px-3">1<br /><span className="inline-block mt-2 px-2 py-1 rounded bg-soul-blue text-white text-xs">10:00am Booked</span></td>
                            <td className="py-4 px-3">2</td>
                            <td className="py-4 px-3">3<br /><span className="inline-block mt-2 px-2 py-1 rounded bg-soul-gold text-white text-xs">2:00pm Booked</span></td>
                            <td className="py-4 px-3">4</td>
                            <td className="py-4 px-3">5</td>
                            <td className="py-4 px-3">6</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-3">7</td>
                            <td className="py-4 px-3">8</td>
                            <td className="py-4 px-3">9<br /><span className="inline-block mt-2 px-2 py-1 rounded bg-soul-blue text-white text-xs">11:30am Booked</span></td>
                            <td className="py-4 px-3">10</td>
                            <td className="py-4 px-3">11</td>
                            <td className="py-4 px-3">12<br /><span className="inline-block mt-2 px-2 py-1 rounded bg-soul-gold text-white text-xs">1:00pm Booked</span></td>
                            <td className="py-4 px-3">13</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* Existing bookings table */}
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-soul-stone/70">
                        <th>Date</th>
                        <th>User</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2024-06-10</td>
                        <td>Jane Doe</td>
                        <td>Upcoming</td>
                        <td><Button size="sm" className="bg-soul-blue text-white">View</Button></td>
                      </tr>
                      <tr>
                        <td>2024-06-08</td>
                        <td>Michael Lee</td>
                        <td>Completed</td>
                        <td><Button size="sm" className="bg-soul-blue text-white">View</Button></td>
                      </tr>
                    </tbody>
                  </table>
                  <Button className="mt-4 bg-soul-gold text-white">Sync Calendar</Button>
                </div>
              </div>
            )}
            {active === "Programs" && (
              <div>
                <div className="flex flex-wrap gap-2 mb-2"><PlanBadge plan="Advanced" /></div>
                <h1 className="font-serif text-3xl mb-6 gradient-text">Program Management</h1>
                
                {/* Current Programs Section */}
                <div className="bg-white rounded-lg shadow p-6 mb-8">
                  <h2 className="font-serif text-xl mb-4 text-soul-blue">Current Programs</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Program Card 1 */}
                    <div className="border border-soul-cream rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-medium text-lg">Mindful Living</h3>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Active</span>
                      </div>
                      <p className="text-soul-stone/80 mb-3">A comprehensive program for developing mindfulness practices in daily life.</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-soul-blue/10 text-soul-blue px-2 py-1 rounded text-sm">PDF</span>
                        <span className="bg-soul-blue/10 text-soul-blue px-2 py-1 rounded text-sm">$49</span>
                        <span className="bg-soul-blue/10 text-soul-blue px-2 py-1 rounded text-sm">12 Weeks</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-soul-blue text-white">Edit</Button>
                        <Button size="sm" variant="outline" className="border-soul-cream">View Details</Button>
                      </div>
                    </div>

                    {/* Program Card 2 */}
                    <div className="border border-soul-cream rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-medium text-lg">Holistic Wellness</h3>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Active</span>
                      </div>
                      <p className="text-soul-stone/80 mb-3">A complete wellness program focusing on physical, mental, and spiritual health.</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-soul-blue/10 text-soul-blue px-2 py-1 rounded text-sm">PDF</span>
                        <span className="bg-soul-blue/10 text-soul-blue px-2 py-1 rounded text-sm">$39</span>
                        <span className="bg-soul-blue/10 text-soul-blue px-2 py-1 rounded text-sm">8 Weeks</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-soul-blue text-white">Edit</Button>
                        <Button size="sm" variant="outline" className="border-soul-cream">View Details</Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add New Program Section */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="font-serif text-xl mb-4 text-soul-blue">Add New Program</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Program Name</label>
                        <input 
                          type="text" 
                          className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20"
                          placeholder="Enter program name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Price ($)</label>
                        <input 
                          type="number" 
                          className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20"
                          placeholder="0.00"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-soul-stone mb-1">Description</label>
                      <textarea 
                        className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20 h-24"
                        placeholder="Enter program description"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Duration (Weeks)</label>
                        <input 
                          type="number" 
                          className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20"
                          placeholder="Enter duration"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Format</label>
                        <select className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20">
                          <option value="">Select format</option>
                          <option value="pdf">PDF</option>
                          <option value="video">Video</option>
                          <option value="hybrid">Hybrid</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Status</label>
                        <select className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20">
                          <option value="draft">Draft</option>
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-end gap-3">
                      <Button variant="outline" className="border-soul-cream">Save as Draft</Button>
                      <Button className="bg-soul-blue text-white">Create Program</Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {active === "Resources" && (
              <div>
                <div className="flex flex-wrap gap-2 mb-2"><PlanBadge plan="Advanced" /></div>
                <h1 className="font-serif text-3xl mb-6 gradient-text">Resource Library</h1>

                {/* Current Resources Section */}
                <div className="bg-white rounded-lg shadow p-6 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-serif text-xl text-soul-blue">Current Resources</h2>
                    <div className="flex gap-2">
                      <Button variant="outline" className="border-soul-cream">Filter</Button>
                      <Button variant="outline" className="border-soul-cream">Sort</Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Resource Card 1 */}
                    <div className="border border-soul-cream rounded-lg overflow-hidden">
                      <div className="h-40 bg-soul-blue/5 relative">
                        <img 
                          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop" 
                          alt="Mindful Living PDF" 
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-2 right-2 bg-soul-blue text-white px-2 py-1 rounded text-sm">PDF</span>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-lg">Mindful Living PDF</h3>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Public</span>
                        </div>
                        <p className="text-soul-stone/80 text-sm mb-3">A comprehensive guide to mindfulness practices and techniques.</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-soul-blue/10 text-soul-blue px-2 py-1 rounded text-sm">2.5 MB</span>
                          <span className="bg-soul-blue/10 text-soul-blue px-2 py-1 rounded text-sm">24 Pages</span>
                          <span className="bg-soul-blue/10 text-soul-blue px-2 py-1 rounded text-sm">Free</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-soul-blue text-white">Edit</Button>
                          <Button size="sm" variant="outline" className="border-soul-cream">View</Button>
                        </div>
                      </div>
                    </div>

                    {/* Resource Card 2 */}
                    <div className="border border-soul-cream rounded-lg overflow-hidden">
                      <div className="h-40 bg-soul-blue/5 relative">
                        <img 
                          src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&h=600&fit=crop" 
                          alt="Wellness Video" 
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-2 right-2 bg-soul-gold text-white px-2 py-1 rounded text-sm">Video</span>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-lg">Wellness Video</h3>
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Account Only</span>
                        </div>
                        <p className="text-soul-stone/80 text-sm mb-3">Guided wellness practices and exercises for daily routine.</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-soul-blue/10 text-soul-blue px-2 py-1 rounded text-sm">45 MB</span>
                          <span className="bg-soul-blue/10 text-soul-blue px-2 py-1 rounded text-sm">30 Min</span>
                          <span className="bg-soul-blue/10 text-soul-blue px-2 py-1 rounded text-sm">$19.99</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-soul-blue text-white">Edit</Button>
                          <Button size="sm" variant="outline" className="border-soul-cream">View</Button>
                        </div>
                      </div>
                    </div>

                    {/* Resource Card 3 */}
                    <div className="border border-soul-cream rounded-lg overflow-hidden">
                      <div className="h-40 bg-soul-blue/5 relative">
                        <img 
                          src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800&h=600&fit=crop" 
                          alt="Meditation Guide" 
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-2 right-2 bg-soul-blue text-white px-2 py-1 rounded text-sm">PDF</span>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-lg">Meditation Guide</h3>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Public</span>
                        </div>
                        <p className="text-soul-stone/80 text-sm mb-3">Step-by-step meditation techniques for beginners and advanced practitioners.</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-soul-blue/10 text-soul-blue px-2 py-1 rounded text-sm">1.8 MB</span>
                          <span className="bg-soul-blue/10 text-soul-blue px-2 py-1 rounded text-sm">18 Pages</span>
                          <span className="bg-soul-blue/10 text-soul-blue px-2 py-1 rounded text-sm">Free</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-soul-blue text-white">Edit</Button>
                          <Button size="sm" variant="outline" className="border-soul-cream">View</Button>
                        </div>
                      </div>
                    </div>

                    {/* Resource Card 4 */}
                    <div className="border border-soul-cream rounded-lg overflow-hidden">
                      <div className="h-40 bg-soul-blue/5 relative">
                        <img 
                          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop" 
                          alt="Yoga Flow Series" 
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-2 right-2 bg-soul-gold text-white px-2 py-1 rounded text-sm">Video</span>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-lg">Yoga Flow Series</h3>
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Account Only</span>
                        </div>
                        <p className="text-soul-stone/80 text-sm mb-3">Complete yoga flow series for all levels, focusing on mindfulness and movement.</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-soul-blue/10 text-soul-blue px-2 py-1 rounded text-sm">120 MB</span>
                          <span className="bg-soul-blue/10 text-soul-blue px-2 py-1 rounded text-sm">45 Min</span>
                          <span className="bg-soul-blue/10 text-soul-blue px-2 py-1 rounded text-sm">$24.99</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-soul-blue text-white">Edit</Button>
                          <Button size="sm" variant="outline" className="border-soul-cream">View</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add New Resource Section */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="font-serif text-xl mb-6 text-soul-blue">Add New Resource</h2>
                  <form className="space-y-6">
                    {/* Basic Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Resource Title</label>
                        <input 
                          type="text" 
                          className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20"
                          placeholder="Enter resource title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Resource Type</label>
                        <select className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20">
                          <option value="">Select type</option>
                          <option value="pdf">PDF Document</option>
                          <option value="video">Video</option>
                          <option value="audio">Audio</option>
                          <option value="image">Image</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-soul-stone mb-1">Description</label>
                      <textarea 
                        className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20 h-24"
                        placeholder="Enter resource description"
                      />
                    </div>

                    {/* Access & Pricing */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Access Level</label>
                        <select className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20">
                          <option value="public">Public</option>
                          <option value="account">Account Required</option>
                          <option value="program">Program Specific</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Price ($)</label>
                        <input 
                          type="number" 
                          className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20"
                          placeholder="0.00"
                        />
                      </div>
                    </div>

                    {/* File Uploads */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Resource File</label>
                        <div className="border-2 border-dashed border-soul-cream rounded-lg p-6 text-center">
                          <div className="mb-2">
                            <svg className="mx-auto h-12 w-12 text-soul-stone/40" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div className="text-sm text-soul-stone/60 mb-2">
                            Drag and drop your file here, or click to browse
                          </div>
                          <Button variant="outline" className="border-soul-cream">Browse Files</Button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Cover Image</label>
                        <div className="border-2 border-dashed border-soul-cream rounded-lg p-6 text-center">
                          <div className="mb-2">
                            <svg className="mx-auto h-12 w-12 text-soul-stone/40" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div className="text-sm text-soul-stone/60 mb-2">
                            Upload a cover image (recommended size: 800x600)
                          </div>
                          <Button variant="outline" className="border-soul-cream">Browse Images</Button>
                        </div>
                      </div>
                    </div>

                    {/* Additional Settings */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Category</label>
                        <select className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20">
                          <option value="">Select category</option>
                          <option value="mindfulness">Mindfulness</option>
                          <option value="wellness">Wellness</option>
                          <option value="meditation">Meditation</option>
                          <option value="exercise">Exercise</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Status</label>
                        <select className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20">
                          <option value="draft">Draft</option>
                          <option value="published">Published</option>
                          <option value="archived">Archived</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-end gap-3">
                      <Button variant="outline" className="border-soul-cream">Save as Draft</Button>
                      <Button className="bg-soul-blue text-white">Create Resource</Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {active === "Events" && (
              <div>
                <div className="flex flex-wrap gap-2 mb-2"><PlanBadge plan="Advanced" /></div>
                <h1 className="font-serif text-3xl mb-6 gradient-text">Events Management</h1>

                {/* Events Calendar Section */}
                <div className="bg-white rounded-lg shadow p-6 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-serif text-xl text-soul-blue">Events Calendar</h2>
                    <div className="flex gap-2">
                      <Button variant="outline" className="border-soul-cream">Previous</Button>
                      <Button variant="outline" className="border-soul-cream">Next</Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                      <div key={day} className="text-center font-medium text-soul-stone/70 py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 35 }, (_, i) => {
                      const day = i + 1;
                      const hasEvent = [3, 7, 15, 22, 28].includes(day);
                      const isToday = day === 15;
                      
                      return (
                        <div 
                          key={day}
                          className={`min-h-[100px] p-2 border rounded-lg ${
                            isToday ? 'bg-soul-blue/5 border-soul-blue' : 'border-soul-cream'
                          }`}
                        >
                          <div className="text-sm mb-1">{day}</div>
                          {hasEvent && (
                            <div className="text-xs bg-soul-blue text-white rounded px-1 py-0.5 mb-1">
                              Summer Retreat
                            </div>
                          )}
                          {hasEvent && day === 15 && (
                            <div className="text-xs bg-soul-gold text-white rounded px-1 py-0.5">
                              Mindfulness Workshop
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Upcoming Events Section */}
                <div className="bg-white rounded-lg shadow p-6 mb-8">
                  <h2 className="font-serif text-xl mb-6 text-soul-blue">Upcoming Events</h2>
                  <div className="space-y-6">
                    {/* Event Card 1 */}
                    <div className="border border-soul-cream rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-medium text-lg">Summer Retreat</h3>
                          <p className="text-soul-stone/70">June 15-17, 2024 • 9:00 AM - 5:00 PM</p>
                        </div>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">20 RSVPs</span>
                      </div>
                      <p className="text-soul-stone/80 mb-4">A three-day immersive retreat focusing on mindfulness, meditation, and personal growth.</p>
                      
                      {/* RSVP List */}
                      <div className="mb-4">
                        <h4 className="font-medium text-soul-stone mb-2">Confirmed RSVPs</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {['Jane Doe', 'Michael Lee', 'Sarah Wilson', 'John Smith', 'Emma Brown'].map((name) => (
                            <div key={name} className="flex items-center justify-between bg-soul-cream/20 rounded p-2">
                              <span className="text-sm">{name}</span>
                              <Button size="sm" variant="ghost" className="text-soul-blue">View Details</Button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pending Invites */}
                      <div>
                        <h4 className="font-medium text-soul-stone mb-2">Pending Invites</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {['Alex Johnson', 'Maria Garcia', 'David Kim', 'Lisa Chen'].map((name) => (
                            <div key={name} className="flex items-center justify-between bg-soul-cream/20 rounded p-2">
                              <span className="text-sm">{name}</span>
                              <Button size="sm" variant="ghost" className="text-soul-blue">Send Reminder</Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Event Card 2 */}
                    <div className="border border-soul-cream rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-medium text-lg">Mindfulness Workshop</h3>
                          <p className="text-soul-stone/70">June 15, 2024 • 2:00 PM - 4:00 PM</p>
                        </div>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Program Only</span>
                      </div>
                      <p className="text-soul-stone/80 mb-4">An intensive workshop on mindfulness techniques and daily practice integration.</p>
                      
                      {/* RSVP List */}
                      <div className="mb-4">
                        <h4 className="font-medium text-soul-stone mb-2">Confirmed RSVPs</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {['Robert Taylor', 'Emily Davis', 'James Wilson', 'Sophie Martin'].map((name) => (
                            <div key={name} className="flex items-center justify-between bg-soul-cream/20 rounded p-2">
                              <span className="text-sm">{name}</span>
                              <Button size="sm" variant="ghost" className="text-soul-blue">View Details</Button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pending Invites */}
                      <div>
                        <h4 className="font-medium text-soul-stone mb-2">Pending Invites</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {['Tom Anderson', 'Rachel Green', 'Chris Evans'].map((name) => (
                            <div key={name} className="flex items-center justify-between bg-soul-cream/20 rounded p-2">
                              <span className="text-sm">{name}</span>
                              <Button size="sm" variant="ghost" className="text-soul-blue">Send Reminder</Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Create New Event Section */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="font-serif text-xl mb-6 text-soul-blue">Create New Event</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Event Title</label>
                        <input 
                          type="text" 
                          className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20"
                          placeholder="Enter event title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Event Type</label>
                        <select className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20">
                          <option value="">Select type</option>
                          <option value="workshop">Workshop</option>
                          <option value="retreat">Retreat</option>
                          <option value="class">Class</option>
                          <option value="seminar">Seminar</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Start Date & Time</label>
                        <input 
                          type="datetime-local" 
                          className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">End Date & Time</label>
                        <input 
                          type="datetime-local" 
                          className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-soul-stone mb-1">Description</label>
                      <textarea 
                        className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20 h-24"
                        placeholder="Enter event description"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Access Level</label>
                        <select className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20">
                          <option value="public">Public</option>
                          <option value="program">Program Only</option>
                          <option value="invite">Invite Only</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Capacity</label>
                        <input 
                          type="number" 
                          className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20"
                          placeholder="Enter maximum capacity"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-3">
                      <Button variant="outline" className="border-soul-cream">Save as Draft</Button>
                      <Button className="bg-soul-blue text-white">Create Event</Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {active === "Email & Automation" && (
              <div>
                <div className="flex flex-wrap gap-2 mb-2"><PlanBadge plan="Optional" /></div>
                <h1 className="font-serif text-3xl mb-6 gradient-text">Email & Automation</h1>

                {/* Analytics Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow p-6 text-center">
                    <div className="text-2xl font-bold text-soul-blue">2,300</div>
                    <div className="text-soul-stone/70">Total Emails Sent</div>
                  </div>
                  <div className="bg-white rounded-lg shadow p-6 text-center">
                    <div className="text-2xl font-bold text-soul-blue">38%</div>
                    <div className="text-soul-stone/70">Open Rate</div>
                  </div>
                  <div className="bg-white rounded-lg shadow p-6 text-center">
                    <div className="text-2xl font-bold text-soul-blue">12%</div>
                    <div className="text-soul-stone/70">Click Rate</div>
                  </div>
                </div>

                {/* Recent Campaigns */}
                <div className="bg-white rounded-lg shadow p-6 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-serif text-xl text-soul-blue">Recent Email Campaigns</h2>
                    <Button className="bg-soul-blue text-white">Create Campaign</Button>
                  </div>
                  <table className="w-full text-left mb-4">
                    <thead>
                      <tr className="text-soul-stone/70">
                        <th className="py-2">Subject</th>
                        <th>Status</th>
                        <th>Sent</th>
                        <th>Open Rate</th>
                        <th>Click Rate</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Welcome to Soul2Soul!</td>
                        <td><span className="inline-block px-2 py-1 rounded bg-green-100 text-green-700 text-xs">Sent</span></td>
                        <td>1,200</td>
                        <td>45%</td>
                        <td>18%</td>
                        <td><Button size="sm" className="bg-soul-blue text-white">View</Button></td>
                      </tr>
                      <tr>
                        <td>June Mindfulness Tips</td>
                        <td><span className="inline-block px-2 py-1 rounded bg-yellow-100 text-yellow-700 text-xs">Scheduled</span></td>
                        <td>800</td>
                        <td>32%</td>
                        <td>9%</td>
                        <td><Button size="sm" className="bg-soul-blue text-white">View</Button></td>
                      </tr>
                      <tr>
                        <td>Event Reminder: Summer Retreat</td>
                        <td><span className="inline-block px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs">Draft</span></td>
                        <td>—</td>
                        <td>—</td>
                        <td>—</td>
                        <td><Button size="sm" className="bg-soul-blue text-white">Edit</Button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Automation Workflows */}
                <div className="bg-white rounded-lg shadow p-6 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-serif text-xl text-soul-blue">Automation Workflows</h2>
                    <Button className="bg-soul-blue text-white">Create Workflow</Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Workflow Card 1 */}
                    <div className="border border-soul-cream rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium text-lg">Welcome Series</h3>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Active</span>
                      </div>
                      <p className="text-soul-stone/80 mb-2">Sends a series of welcome emails to new users over their first week.</p>
                      <div className="text-xs text-soul-stone/60 mb-2">Trigger: User Signup</div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-soul-blue text-white">View</Button>
                        <Button size="sm" variant="outline" className="border-soul-cream">Edit</Button>
                      </div>
                    </div>
                    {/* Workflow Card 2 */}
                    <div className="border border-soul-cream rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium text-lg">Event Reminder</h3>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Paused</span>
                      </div>
                      <p className="text-soul-stone/80 mb-2">Automatically sends reminders to users who RSVP to events.</p>
                      <div className="text-xs text-soul-stone/60 mb-2">Trigger: Event RSVP</div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-soul-blue text-white">View</Button>
                        <Button size="sm" variant="outline" className="border-soul-cream">Edit</Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Create New Campaign Section */}
                <div className="bg-white rounded-lg shadow p-6 mb-8">
                  <h2 className="font-serif text-xl mb-6 text-soul-blue">Create New Email Campaign</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Subject</label>
                        <input 
                          type="text" 
                          className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20"
                          placeholder="Enter email subject"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Recipients</label>
                        <select className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20">
                          <option value="all">All Users</option>
                          <option value="program">Program Participants</option>
                          <option value="event">Event Attendees</option>
                          <option value="custom">Custom List</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-soul-stone mb-1">Content</label>
                      <textarea 
                        className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20 h-24"
                        placeholder="Write your email content here..."
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Schedule</label>
                        <input 
                          type="datetime-local" 
                          className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Status</label>
                        <select className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20">
                          <option value="draft">Draft</option>
                          <option value="scheduled">Scheduled</option>
                          <option value="sent">Sent</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex justify-end gap-3">
                      <Button variant="outline" className="border-soul-cream">Save as Draft</Button>
                      <Button className="bg-soul-blue text-white">Send Campaign</Button>
                    </div>
                  </form>
                </div>

                {/* Create New Automation Workflow Section */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="font-serif text-xl mb-6 text-soul-blue">Create New Automation Workflow</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Workflow Name</label>
                        <input 
                          type="text" 
                          className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20"
                          placeholder="Enter workflow name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-soul-stone mb-1">Trigger</label>
                        <select className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20">
                          <option value="signup">User Signup</option>
                          <option value="rsvp">Event RSVP</option>
                          <option value="purchase">Purchase</option>
                          <option value="date">Specific Date</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-soul-stone mb-1">Action</label>
                      <select className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20">
                        <option value="send-email">Send Email</option>
                        <option value="add-tag">Add Tag</option>
                        <option value="notify-admin">Notify Admin</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-soul-stone mb-1">Description</label>
                      <textarea 
                        className="w-full border border-soul-cream rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue/20 h-20"
                        placeholder="Describe what this workflow does..."
                      />
                    </div>
                    <div className="flex justify-end gap-3">
                      <Button variant="outline" className="border-soul-cream">Save as Draft</Button>
                      <Button className="bg-soul-blue text-white">Create Workflow</Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {active === "Blog" && (
              <div>
                <div className="flex flex-wrap gap-2 mb-2"><PlanBadge plan="Optional" /></div>
                <h1 className="font-serif text-3xl mb-6 gradient-text">Blog Management</h1>
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <Button className="mb-4 bg-soul-blue text-white">Add Blog Post</Button>
                  <ul className="list-disc ml-6 text-soul-stone/80">
                    <li>How to Start Mindful Living</li>
                    <li>Benefits of Group Coaching</li>
                  </ul>
                </div>
              </div>
            )}
            {active === "Payments" && (
              <div>
                <div className="flex flex-wrap gap-2 mb-2"><PlanBadge plan="Advanced" /></div>
                <h1 className="font-serif text-3xl mb-6 gradient-text">Payments & Transactions</h1>
                {/* Analytics Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow p-6 text-center">
                    <div className="text-2xl font-bold text-soul-blue">$2,500</div>
                    <div className="text-soul-stone/70">Total Revenue</div>
                  </div>
                  <div className="bg-white rounded-lg shadow p-6 text-center">
                    <div className="text-2xl font-bold text-soul-blue">$1,800</div>
                    <div className="text-soul-stone/70">Profit</div>
                  </div>
                  <div className="bg-white rounded-lg shadow p-6 text-center">
                    <div className="text-2xl font-bold text-soul-blue">Mindful Living</div>
                    <div className="text-soul-stone/70">Top Selling Product</div>
                  </div>
                </div>
                {/* Searchable Payments Table */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <input className="border border-soul-cream rounded px-4 py-2 w-full mb-4" placeholder="Search payments by user, product, or status..." />
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-soul-stone/70">
                        <th className="py-2">User</th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Jane Doe</td>
                        <td>Mindful Living</td>
                        <td>$49</td>
                        <td><span className="inline-block px-2 py-1 rounded bg-green-100 text-green-700 text-xs">Paid</span></td>
                        <td>2024-06-10</td>
                        <td><Button size="sm" className="bg-soul-blue text-white">View</Button></td>
                      </tr>
                      <tr>
                        <td>Michael Lee</td>
                        <td>Wellness Workbook</td>
                        <td>$39</td>
                        <td><span className="inline-block px-2 py-1 rounded bg-red-100 text-red-700 text-xs">Refunded</span></td>
                        <td>2024-06-08</td>
                        <td><Button size="sm" className="bg-soul-blue text-white">View</Button></td>
                      </tr>
                      <tr>
                        <td>Emily Rose</td>
                        <td>Mindful Living</td>
                        <td>$49</td>
                        <td><span className="inline-block px-2 py-1 rounded bg-green-100 text-green-700 text-xs">Paid</span></td>
                        <td>2024-06-07</td>
                        <td><Button size="sm" className="bg-soul-blue text-white">View</Button></td>
                      </tr>
                    </tbody>
                  </table>
                  <Button className="mt-4 bg-soul-gold text-white">View Stripe Dashboard</Button>
                </div>
              </div>
            )}
            {active === "Settings" && (
              <div>
                <div className="flex flex-wrap gap-2 mb-2"><PlanBadge plan="Advanced" /></div>
                <h1 className="font-serif text-3xl mb-6 gradient-text">Site Settings</h1>
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <Button className="mb-4 bg-soul-blue text-white">Upload Logo</Button>
                  <div className="text-soul-stone/80 mb-2">Primary Color: <span className="inline-block w-4 h-4 bg-soul-blue rounded-full align-middle ml-1"></span></div>
                  <div className="text-soul-stone/80 mb-2">Font: Playfair Display, Inter</div>
                  <div className="text-soul-stone/80 mb-2">Contact Email: info@soul2soulcoaching.com</div>
                  <div className="text-soul-stone/80 mb-2">Social: @soul2soul</div>
                  <Button className="mt-4 bg-soul-gold text-white">Save Changes</Button>
                </div>
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </PageLayout>
  );
};

export default Admin; 