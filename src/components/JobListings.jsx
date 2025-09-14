import { useState } from 'react';
import AnimationWrapper from './AnimationWrapper';
import JobModal from './JobModal';
import { jobListings } from '../utils/jobData';

const JobListings = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const departments = ['All', ...new Set(jobListings.map(job => job.department))];
  
  const filteredJobs = jobListings.filter(job => 
    selectedDepartment === 'All' || job.department === selectedDepartment
  );

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Job Openings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our current job openings and find the perfect opportunity to advance your career with us.
            </p>
          </div>
        </AnimationWrapper>

        {/* Filter */}
        <AnimationWrapper animation="fade-up">
          <div className="mb-8 flex justify-center">
            <div className="bg-gray-50 p-2 rounded-xl">
              <select 
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="bg-white border-0 rounded-lg px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {dept === 'All' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </AnimationWrapper>

        {/* Job Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <AnimationWrapper key={job.id} animation="fade-up" delay={index * 100}>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {job.department}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <img src="https://img.icons8.com/material-outlined/24/000000/marker.png" alt="Location" className="w-4 h-4 mr-2" />
                  <span className="text-sm">{job.location}</span>
                </div>
                
                <p className="text-gray-700 mb-6 text-sm leading-relaxed line-clamp-3">
                  {job.description}
                </p>
                
                <button 
                  onClick={() => handleJobClick(job)}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Apply Now
                </button>
              </div>
            </AnimationWrapper>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <AnimationWrapper animation="fade-up">
            <div className="text-center py-12">
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No positions found</h3>
                <p className="text-gray-600">Try selecting a different department or check back later for new openings.</p>
              </div>
            </div>
          </AnimationWrapper>
        )}
      </div>

      {/* Job Modal */}
      {selectedJob && (
        <JobModal 
          job={selectedJob} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default JobListings;