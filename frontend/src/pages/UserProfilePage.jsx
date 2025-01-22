/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUser, 
  FaShoppingCart, 
  FaCog, 
  FaHistory, 
  FaEdit, 
  FaSave, 
  FaLock 
} from 'react-icons/fa';

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0123456789',
    address: 'Hà Nội, Việt Nam'
  });

  

  const menuVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 300 
      } 
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "tween", 
        duration: 0.5 
      } 
    }
  };

  const renderProfileContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <motion.div 
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm sm:p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-emerald-400">personal information</h2>
              {!isEditing ? (
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEditing(true)}
                  className="flex items-center text-gray-300 hover:text-emerald-400"
                >
                  <FaEdit className="mr-2" /> Edit
                </motion.button>
              ) : (
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEditing(false)}
                  className="flex items-center text-emerald-400 hover:text-emerald-500"
                >
                  <FaSave className="mr-2" /> Save
                </motion.button>
              )}
            </div>

            <div className="space-y-4">
              {[
                { label: 'Ful Name', field: 'name' },
                { label: 'Email', field: 'email' },
                { label: 'Phone Number', field: 'phone' },
                { label: 'Address', field: 'address' }
              ].map((item) => (
                <div key={item.field} className="space-y-2">
                  <dt className="text-base font-normal text-gray-300">{item.label}</dt>
                  {isEditing ? (
                    <input
                      type="text"
                      value={user[item.field]}
                      onChange={(e) => setUser({
                        ...user,
                        [item.field]: e.target.value
                      })}
                      className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  ) : (
                    <dd className="text-base font-medium text-white">
                      {user[item.field]}
                    </dd>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        );
      
      case 'orders':
        return (
          <motion.div 
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm sm:p-6"
          >
            <h2 className="text-xl font-semibold text-emerald-400 mb-6">
              Your Orders
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-gray-600">
                  <tr>
                    <th className="py-3 px-4 text-left text-base font-normal text-gray-300">Code</th>
                    <th className="py-3 px-4 text-left text-base font-normal text-gray-300">Time</th>
                    <th className="py-3 px-4 text-left text-base font-normal text-gray-300">Total</th>
                    <th className="py-3 px-4 text-left text-base font-normal text-gray-300">Status</th>
                  </tr>
                </thead>
                <tbody>
                  
                </tbody>
              </table>
            </div>
          </motion.div>
        );

      case 'settings':
        return (
          <motion.div 
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm sm:p-6"
          >
            <h2 className="text-xl font-semibold text-emerald-400 mb-6">
              Account Setting
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaLock className="mr-3 text-gray-300" />
                  <span className="text-base font-normal text-gray-300">Change Passwords</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-emerald-500 text-white rounded-md"
                >
                  ConfirmPassword
                </motion.button>
              </div>
            </div>
          </motion.div>
        );

        case 'banking':
  return (
    <motion.div 
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm sm:p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-emerald-400">
          History Banking
        </h2>
        <div className="flex items-center space-x-2">
          <select className="bg-gray-700 text-white border border-gray-600 rounded-md px-3 py-2">
            <option>Time</option>
            <option>The last 3 months</option>
            <option>This year</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-600">
            <tr>
              <th className="py-3 px-4 text-left text-base font-normal text-gray-300">
              Transaction Code
              </th>
              <th className="py-3 px-4 text-left text-base font-normal text-gray-300">
                Time
              </th>
              <th className="py-3 px-4 text-left text-base font-normal text-gray-300">
               Type
              </th>
              <th className="py-3 px-4 text-left text-base font-normal text-gray-300">
              Amount
              </th>
              <th className="py-3 px-4 text-left text-base font-normal text-gray-300">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: 'TRX001',
                date: '15/06/2023',
                type: 'Deposit Money',
                amount: 500000,
                status: 'Success'
              },
              {
                id: 'TRX002',
                date: '20/06/2023',
                type: 'Order Payment',
                amount: -250000,
                status: 'Success'
              },
              {
                id: 'TRX003',
                date: '25/06/2023',
                type: 'Refund',
                amount: 100000,
                status: 'Success'
              }
            ].map((transaction) => (
              <tr 
                key={transaction.id} 
                className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
              >
                <td className="py-3 px-4 text-base font-medium text-white">
                  {transaction.id}
                </td>
                <td className="py-3 px-4 text-base font-normal text-gray-300">
                  {transaction.date}
                </td>
                <td className="py-3 px-4">
                  <span className={`
                    text-base font-medium 
                    ${transaction.type === 'Nạp Tiền' 
                      ? 'text-emerald-400' 
                      : transaction.type === 'Thanh Toán Đơn Hàng' 
                      ? 'text-red-400' 
                      : 'text-blue-400'}
                  `}>
                    {transaction.type}
                  </span>
                </td>
                <td className={`py-3 px-4 text-base font-medium ${
                  transaction.amount > 0 ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString()} đ
                </td>
                <td className="py-3 px-4">
                  <span className="text-emerald-400 bg-emerald-400 bg-opacity-10 px-2 py-1 rounded-full text-xs font-bold">
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
      <div className="mt-6 border-t border-gray-700 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-base font-normal text-gray-300">
            remaining amount
          </span>
          <span className="text-xl font-bold text-emerald-400">
            $1,350,000
          </span>
        </div>
      </div>
    </motion.div>
  );

      default:
        return null;
    }
  };

  return (
    <div className=" bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Menu */}
          <motion.div 
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            className="rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm"
          >
            {[
              { 
                icon: <FaUser />, 
                label: 'personal information',
                tab: 'profile' 
              },
              { 
                icon: <FaShoppingCart />, 
                label: 'orders', 
                tab: 'orders' 
              },
              {
                icon: <FaHistory />, 
                label: 'Payment History', 
                tab: 'banking' 
              },
              { 
                icon: <FaCog />, 
                label: 'settings', 
                tab: 'settings' 
              }
            ].map((item) => (
              <motion.button
                key={item.tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(item.tab)}
                className={`w-full flex items-center py-3 px-4 rounded-md mb-2 transition-colors duration-300 ${
                  activeTab === item.tab 
                    ? 'bg-emerald-500 text-white' 
                    : 'hover:bg-gray-700 text-gray-300'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </motion.button>
            ))}
          </motion.div>
          <div className="md:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderProfileContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage; 