package collections.simple;

import java.util.ArrayList;

public class TypedCollection {

	public static void main(String[] args) {
		ArrayList<String> list = new ArrayList<>();
		list.add("Foo");
		list.add("Bar");
		System.out.println("Elements: " + list.size());
		for (String o : list)
			System.out.println(o);
		String s = list.get(0);
		SomeClassIMadeUp c = new SomeClassIMadeUp();
//		list.add(c);

	}

}
