const admin = require('firebase-admin');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('./eshop-212eb-firebase-adminsdk-fbsvc-a418484b20.json');

admin.initializeApp({
  credential: admin.cert(serviceAccount),
});

const db = getFirestore();

const sampleProducts = [
  {
    name: 'Minimalist Leather Backpack',
    price: 120.0,
    category: 'Bags',
    stock: 25,
    imageUrl:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    description: 'Durable top-grain leather backpack perfect for daily commutes.',
  },
  {
    name: 'Wireless Mechanical Keyboard',
    price: 89.99,
    category: 'Electronics',
    stock: 40,
    imageUrl:
      'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80',
    description: 'Compact 75% layout keyboard with tactile brown switches.',
  },
  {
    name: 'Stainless Steel Water Bottle',
    price: 24.5,
    category: 'Lifestyle',
    stock: 100,
    imageUrl:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
    description: 'Vacuum insulated bottle that keeps drinks cold for 24 hours.',
  },
  {
    name: 'Ergonomic Desk Mat',
    price: 35.0,
    category: 'Electronics',
    stock: 15,
    imageUrl:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
    description: 'Felt wool desk pad to protect your workspace and ease wrist pressure.',
  },
];

async function seedDatabase() {
  console.log('Started database seeding');

  const productsCollection = db.collection('products');

  for (const product of sampleProducts) {
    try {
      const productWithTimestamp = {
        ...product,
        createdAt: FieldValue.serverTimestamp(),
      };

      const docRef = await productsCollection.add(productWithTimestamp);
      console.log(`Inserted: ${product.name} | Id: ${docRef.id}`);
    } catch (error) {
      console.error('Error inserting:', product.name, error.message);
    }
  }

  console.log('Successfully inserted all data');
  process.exit();
}

seedDatabase();