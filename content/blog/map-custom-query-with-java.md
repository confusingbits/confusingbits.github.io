---
{
  "type": "blog",
  "author": "Corey Thompson",
  "title": "Mapping Custom Queries in Java Spring",
  "description": "How to map a one off DTO from a native query",
  "image": "images/article-covers/java-cry.jpg",
  "published": "2020-08-30",
}
---

The scenario is that you have to get information from two different tables that are related. You can't just query results from a single table which would fit neatly in an existing model. You'll want something like this. I'll explain what I can after the code.

```java
// FooRepo.java
public interface FooRepo extends JpaRepository<Foo> {
  // Why no mutliline string literals, Java?!!! lololol - salty JS dev
  @Query(value="SELECT "
              +"  foo_id AS fooId, "
              +"  bar_id AS barId "
              +"FROM tbl_foo "
              +"LEFT JOIN tbl_bar b "
              +"ON b.foo_for_key = foo_id", nativeQuery=true)
  List<FooBarDTO> findByEmailAddress();
}

// FooBarDTO.java

public interface FooBarDTO {
  String getFooId();
  String getBarId();
}
```

Notice the `AS` usage in the field selection matches the getter naming convention. Like if you had private fields in the DTO named fooId/barId and Lambok created your getters and setters with `@Data` or `@Value` or whatever.

I have no clue how we get an instance of a class from this, but the mapping works and you get your data. To be clear, you can not declare and impliment this interface. Just do this alone. Yes, it makes no sense. Yes, that is not how interfaces work. Yes, this is how Spring does it anyway. Maybe this is normal for Java, but I found it to be a really wierd usage of interfaces.

If you are feeling more brave, I was able to find the relevant documentation [hiding here](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#projections). Be careful trying to click on any section links, many don't go to the relevant sub-sections and you can easily get lost trying to find anything.

Tell me I'm wrong [here](https://twitter.com/confusingbits).